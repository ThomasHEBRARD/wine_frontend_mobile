import 'react-native-gesture-handler';
import React, {
    createElement as $,
    useState,
    createContext,
    useReducer,
    useEffect,
    useMemo,
    useContext,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import {
    NavigationContainer,
    DefaultTheme,
    NavigationContainerRef,
} from '@react-navigation/native';
import { SVG_ICON } from 'svg/enum';
import MenuLink from './Menu/MenuLink';
import Settings from './Menu/MenuSettings';
import Button from '../component/Button';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Profile from './Menu/MenuProfile';
import MyCellar from './pages/MyCellar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './Navigation/TabBar';
import MyBottles from './pages/MyBottles';
import loginClient from 'services/api/login';

const MyCellarHeader = (props: { navigation: any }) => {
    const { navigation } = props;
    const style = StyleSheet.create({
        headerStyle: {
            marginTop: '2%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        cellarNameStyle: {
            color: '#C5CAFF',
            paddingLeft: '5%',
            margin: '1%',
            fontSize: 35,
            width: '75%',
            height: '100%',
        },
        menuItemStyle: {
            margin: '1%',
            display: 'flex',
            flexDirection: 'row',
        },
    });

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <View style={style.headerStyle}>
                <Text style={style.cellarNameStyle}>My Cellar</Text>
                <View style={style.menuItemStyle}>
                    <MenuLink
                        icon={SVG_ICON.PROFILE}
                        onClick={() => navigation.navigate('Profile')}
                    />
                    <MenuLink
                        icon={SVG_ICON.SETTINGS}
                        onClick={() => navigation.navigate('Settings')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const BackArrow = (props: { navigation: any }) => {
    const { navigation } = props;

    return (
        <SafeAreaView>
            <MenuLink icon={SVG_ICON.LEFT_ARROW} onClick={() => navigation.goBack()} />
        </SafeAreaView>
    );
};

const MainRoute = () => {
    const { Navigator, Screen } = createStackNavigator();
    return $(
        Navigator,
        {
            initialRouteName: 'MyCellar',
            children: <View></View>,
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
            children: <View>dzdzdz</View>,
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
const Login = () => {
    const { signIn } = useContext(AuthContext);
    return <Button icon={SVG_ICON.SETTINGS} text={'login'} subtext={'login'} onClick={signIn} />;
};

const Signup = () => <></>;

const LoginRoute = () => {
    const { Navigator, Screen } = createStackNavigator();
    return $(
        Navigator,
        {
            initialRouteName: 'LOGIN',
            children: <></>,
            headerMode: 'screen',
        },
        $(Screen, {
            name: 'LOGIN',
            component: Login,
        }),
        $(Screen, {
            name: 'SIGNUP',
            component: Signup,
        })
    );
};

export const AuthContext = createContext({
    signIn: (data: any) => new Promise<void>((resolve) => resolve()),
    signOut: () => undefined,
    signUp: (data: any) => new Promise<void>((resolve) => resolve()),
});

const Index = () => {
    const ref = React.useRef<NavigationContainerRef>(null);
    const [initialState] = useState();
    const { Navigator, Screen } = createStackNavigator();

    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

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
            signIn: async (data: any) => {
                const response = await loginClient.login('thomas.hebrard134@gmail.com', '1234');
                console.log(response);
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signUp: async (data: any) => {
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }),
        []
    );
    useEffect(() => console.log(state.userToken), [state]);

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
