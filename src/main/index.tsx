import 'react-native-gesture-handler';
import React, { createElement as $, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Store from 'services/reducers/store';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import {
    NavigationContainer,
    DefaultTheme,
    NavigationContainerRef,
} from '@react-navigation/native';
import Settings from './Menu/MenuSettings';
import Profile from './Menu/MenuProfile';
import MyCellar from './pages/MyCellar';
import TabBar from './Navigation/TabBar';
import MyBottles from './pages/MyBottles';
import Login from './Authtentication';
import SignUp from './Authtentication/SignUp';
import MyCellarHeader from './pages/MyCellar/MyCellarHeader';
import BackArrow from './Navigation/BackArrow';
import OnBoarding from './OnBoarding';

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
    const { Navigator, Screen } = createStackNavigator();

    const [initialState] = useState();

    return $(
        Provider,
        { store: Store },
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
                    initialRouteName: 'OnBoarding',
                    children: <></>,
                    screenOptions: {
                        headerShown: false,
                    },
                },
                $(Screen, {
                    name: 'OnBoarding',
                    component: OnBoarding,
                }),
                $(Screen, {
                    name: 'Login',
                    component: LoginRoute,
                }),
                $(Screen, {
                    name: 'MainRoute',
                    component: BottomTabRoute,
                })
            )
        )
    );
};

export default Index;
