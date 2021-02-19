import React from 'react';
import Logout from 'main/Authtentication/Logout';
import { View, Text, StyleSheet } from 'react-native';
import { SVG_ICON } from 'svg/enum';
import SvgIcon from 'svg/svgIcon';

const Settings = () => {
    const style = StyleSheet.create({
        container: {
            width: '90%',
            alignSelf: 'center',
        },
        settingField: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    });
    return (
        <View style={style.container}>
            <View style={style.settingField}>
                <Text>Changer de mot de passe</Text>
                <SvgIcon icon={SVG_ICON.DOWN_ARROW} />
            </View>
            <View style={style.settingField}>
                <Text>Thèmes</Text>
                <SvgIcon icon={SVG_ICON.DOWN_ARROW} />
            </View>
            <View style={style.settingField}>
                <Text>Autres</Text>
                <SvgIcon icon={SVG_ICON.DOWN_ARROW} />
            </View>
            <Logout />
        </View>
    );
};

export default Settings;
