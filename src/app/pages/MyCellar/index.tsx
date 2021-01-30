import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MenuSettingsLink } from '../../Menu/MenuSettingsLink';
import { MenuProfileLink } from '../../Menu/MenuProfileLink';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';
import DoubleButton from 'component/DoubleButton';

const MyCellarHeader = () => {
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
        <View style={style.headerStyle}>
            <Text style={style.cellarNameStyle}>My Cellar</Text>
            <View style={style.menuItemStyle}>
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
            <View style={{ height: '5%' }}></View>
            <DoubleButton />
            <View style={{ height: '10%' }}></View>
            <Button
                icon={SVG_ICON.SETTINGS}
                text={'Mes Bouteilles'}
                subtext={'Voir toutes mes bouteilles'}
            />
        </View>
    );
};

export default MyCellar;
