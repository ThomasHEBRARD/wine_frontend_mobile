import React from 'react';
import MenuLink from 'main/Menu/MenuLink';
import { SafeAreaView, StatusBar, View, Text, StyleSheet } from 'react-native';
import { SVG_ICON } from 'svg/enum';

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

export default MyCellarHeader;
