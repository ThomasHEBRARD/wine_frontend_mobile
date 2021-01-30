import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MenuSettingsLink } from '../../Menu/MenuSettingsLink';
import { MenuProfileLink } from '../../Menu/MenuProfileLink';

const MyCellarHeader = () => {
    const headerStyle = StyleSheet.create({
        container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
    });
    const cellarNameStyle = StyleSheet.create({
        container: {
            color: '#C5CAFF',
            paddingLeft: '5%',
            margin: '1%',
            fontSize: 35,
            width: '75%',
            height: '100%',
        },
    });
    const menuItemsStyle = StyleSheet.create({
        container: {
            margin: '1%',
            display: 'flex',
            flexDirection: 'row',
        },
    });

    return (
        <View style={headerStyle.container}>
            <Text style={cellarNameStyle.container}>My Cellar</Text>
            <View style={menuItemsStyle.container}>
                <MenuProfileLink />
                <MenuSettingsLink />
            </View>
        </View>
    );
};
const MyCellar = () => {
    return (
        <View>
            <MyCellarHeader />
        </View>
    );
};

export default MyCellar;
