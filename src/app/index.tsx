import 'react-native-gesture-handler';
import React, { createElement as $, useState, useReducer, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native';
import {
    NavigationContainer,
    DefaultTheme,
    NavigationContainerRef,
} from '@react-navigation/native';
import Settings from './Menu/MenuSettings';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Profile from './Menu/MenuProfile';
import MyCellar from './pages/MyCellar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './Navigation/TabBar';
import MyBottles from './pages/MyBottles';
import loginClient from 'services/api/authentication';
import Login, { AuthContext } from './Authtentication';
import SignUp from './Authtentication/SignUp';
import MyCellarHeader from './pages/MyCellar/MyCellarHeader';
import BackArrow from './Navigation/BackArrow';

const MainRoute = () => {
    const { Navigator, Screen } = createStackNavigator();
    return $(
        Navigator,
        {
            initialRouteName: 'MyCellar',
            children: <SafeAreaView>children</SafeAreaView>,
            headerMode: 'screen',
            screenOptions: {
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                cardStyle: { backgroundColor: 'white' },
            },
        },
        $(Screen, {
            name: 'MyCellar',
            component: MyCellar,
            options: { header: MyCellarHeader },
        }),
        $(Screen, {
            name: 'MyBottles',
            component: MyBottles,
            options: { header: BackArrow },
        }),
        $(Screen, {
            name: 'Profile',
            component: Profile,
            options: { header: BackArrow },
        }),
        $(Screen, {
            name: 'Settings',
            component: Settings,
            options: { header: BackArrow },
        })
    );
};

const BottomTabRoute = () => {
    const { Navigator, Screen } = createBottomTabNavigator();
    return $(
        Navigator,
        {
            initialRouteName: 'CELLAR',
            children: <SafeAreaView>children</SafeAreaView>,
            tabBar: TabBar,
        },
        $(Screen, {
            name: 'CELLAR',
            component: MainRoute,
        }),
        $(Screen, {
            name: 'PROFILE',
            component: Profile,
        })
    );
};

const LoginRoute = () => {
    const { Navigator, Screen } = createStackNavigator();
    return $(
        Navigator,
        {
            initialRouteName: 'LOGIN',
            children: <SafeAreaView>children</SafeAreaView>,
            headerMode: 'screen',
            screenOptions: {
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                cardStyle: { backgroundColor: 'white' },
            },
        },
        $(Screen, {
            name: 'LOGIN',
            component: Login,
            options: { headerShown: false },
        }),
        $(Screen, {
            name: 'SIGNUP',
            component: SignUp,
            options: {
                header: BackArrow,
            },
        })
    );
};

const Index = () => {
    const ref = React.useRef<NavigationContainerRef>(null);
    const [initialState] = useState();
    const { Navigator, Screen } = createStackNavigator();

    // const [isLoading, setIsLoading] = useState(false);

    const [state, dispatch] = useReducer(
        (prevState: any, action: any) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return { ...prevState, userToken: action.token, isLoading: false };
                case 'SIGN_IN':
                    return { ...prevState, isSignout: false, userToken: action.token };
                case 'SIGN_OUT':
                    return { ...prevState, isSignout: true, userToken: null };
            }
        },
        { isLoading: true, isSignout: false, userToken: null }
    );

    useEffect(() => {
        const bootstratAsync = async () => {
            let userToken;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                // restoring token failed
            }
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };
        bootstratAsync();
    }, []);

    const authContext = useMemo(
        () => ({
            signIn: async (email: string, password: string) => {
                // toLowerCase()
                const response = await loginClient.login('M@gmail.com', '1234');
                await AsyncStorage.setItem('userToken', response.token);
                dispatch({ type: 'SIGN_IN', token: response.token });
            },
            signOut: async (navigation: any) => {
                await loginClient.logout();
                await AsyncStorage.removeItem('userToken');
                navigation.navigate('Login');
                dispatch({ type: 'SIGN_OUT' });
            },
            signUp: async (data: any) => {
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }),
        []
    );

    return $(
        AuthContext.Provider,
        //@ts-ignore
        { value: authContext },
        $(
            NavigationContainer,
            {
                initialState,
                ref,
                theme: { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: 'white' } },
                children: <></>,
            },
            $(
                Navigator,
                {
                    initialRouteName: 'Login',
                    children: <></>,
                    screenOptions: {
                        headerShown: false,
                    },
                },
                $(Screen, {
                    name: 'Login',
                    component: state.userToken === null ? LoginRoute : BottomTabRoute,
                })
            )
        )
    );
};
export default Index;
