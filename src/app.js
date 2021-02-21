import 'react-native-gesture-handler';
import React, { createElement as $, useEffect, useMemo, useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Store from 'services/reducers/store';
import {
    NavigationContainer,
    DefaultTheme,
    NavigationContainerRef,
} from '@react-navigation/native';

import { SignInProps, SignUpProps } from 'services/type/authentication';
import loginClient from 'services/api/authentication';
import authReducer from 'services/reducers/authentication';

import Settings from './main/Menu/MenuSettings';
import Profile from './main/Menu/MenuProfile';

import MyCellar from './main/pages/MyCellar';
import MyBottles from './main/pages/MyBottles';
import MyBottlesRemoval from './main/pages/MyBottlesRemoval';
import MyCellarHeader from './main/pages/MyCellar/MyCellarHeader';
import BottlePage from './main/pages/BottlePage';

import TabBar from './main/Navigation/TabBar';
import BackArrow from './main/Navigation/BackArrow';

import Login from './main/Authtentication';
import SignUp from './main/Authtentication/SignUp';

import OnBoarding from './main/OnBoarding';

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
            name: 'MyBottlesRemoval',
            component: MyBottlesRemoval,
            options: { header: BackArrow },
        }),
        $(Screen, {
            name: 'MyBottles',
            component: MyBottles,
            options: { header: BackArrow },
        }),
        $(Screen, {
            name: 'BottlePage',
            component: BottlePage,
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

const App = () => {
    const ref = React.useRef();
    const { Navigator, Screen } = createStackNavigator();
    const [initialState] = React.useState();

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

export default App;
