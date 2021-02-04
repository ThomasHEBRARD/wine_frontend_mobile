import 'react-native-gesture-handler';
import React, { Suspense, createElement as $ } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SVG_ICON } from 'svg/enum';
import MenuLink from './Menu/MenuLink';
import Settings from './Menu/MenuSettings';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Menu/MenuProfile';
import MyCellar from './pages/MyCellar';

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
                    <MenuLink icon={SVG_ICON.SETTINGS} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const Back = (props: { navigation: any }) => {
    const { navigation } = props;

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <MenuLink icon={SVG_ICON.LEFT_ARROW} onClick={() => navigation.navigate('MyCellar')} />
        </SafeAreaView>
    );
};

const Routes = () => {
    const { Navigator, Screen } = createStackNavigator();
    return $(
        Navigator,
        {
            initialRouteName: 'MyCellar',
            children: <View></View>,
            headerMode: 'screen',
            screenOptions: {
                cardStyle: { backgroundColor: 'transparent' },
            },
        },
        $(Screen, {
            name: 'MyCellar',
            component: MyCellar,
            options: { header: MyCellarHeader },
        }),
        $(Screen, {
            name: 'Profile',
            component: Profile,
            options: { header: Back },
        }),
        $(Screen, {
            name: 'Settings',
            component: Settings,
        })
    );
};

export default function Index() {
    return (
        <NavigationContainer>
            {/* <React.StrictMode> */}
            <Suspense fallback={<>Loading</>}>
                <Routes />
            </Suspense>
            {/* </React.StrictMode> */}
        </NavigationContainer>
    );
}
