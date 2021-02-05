import 'react-native-gesture-handler';
import React, { Suspense, createElement as $ } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SVG_ICON } from 'svg/enum';
import MenuLink from './Menu/MenuLink';
import Settings from './Menu/MenuSettings';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Profile from './Menu/MenuProfile';
import MyCellar from './pages/MyCellar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './Navigation/TabBar';
import MyBottles from './pages/MyBottles';

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
            initialRouteName: 'SETTINGS',
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
export default function Index() {
    return (
        // TODO: Add Provider, store
        <NavigationContainer
            theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: 'white' } }}
        >
            {/* <React.StrictMode> */}
            <Suspense fallback={<>Loading</>}>
                <BottomTabRoute />
            </Suspense>
            {/* </React.StrictMode> */}
        </NavigationContainer>
    );
}
