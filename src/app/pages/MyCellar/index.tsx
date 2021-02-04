import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';
import DoubleButton from 'component/DoubleButton';

const MyCellar = () => {
    return (
        <SafeAreaView>
            <View style={{ height: '5%' }}></View>
            <DoubleButton />
            <View style={{ height: '10%' }}></View>
            <Button
                icon={SVG_ICON.SETTINGS}
                text={'Mes Bouteilles'}
                subtext={'Voir toutes mes bouteilles'}
            />
            <View style={{ height: '10%' }}></View>
        </SafeAreaView>
    );
};

export default MyCellar;
