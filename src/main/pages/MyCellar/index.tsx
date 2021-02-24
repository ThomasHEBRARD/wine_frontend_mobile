import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';
import { useNavigation } from '@react-navigation/native';

const MyCellar = () => {
    // const { navigation } = props;
    const navigation = useNavigation();
    const style = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',

            alignSelf: 'center',
            borderRadius: 6,
        },
    });

    return (
        <SafeAreaView>
            <View style={{ height: '5%' }}></View>
            <View style={style.container}>
                <Button
                    needsDouble
                    icon={SVG_ICON.PLUS}
                    text={'Ajouter'}
                    subtext={'Ajouter à ma cave'}
                    onClick={() => navigation.navigate('MyBottlesAdding')}
                />
                <Button
                    needsDouble
                    icon={SVG_ICON.MINUS}
                    text={'Boire'}
                    subtext={'Retirer de ma cave'}
                    onClick={() => navigation.navigate('MyBottlesRemoval')}
                />
            </View>
            <View style={{ height: '10%' }}></View>
            <Button
                icon={SVG_ICON.SETTINGS}
                text={'Mes Bouteilles'}
                subtext={'Voir toutes mes bouteilles'}
                onClick={() => navigation.navigate('MyBottles')}
            />
            <View style={{ height: '10%' }}></View>
        </SafeAreaView>
    );
};

export default MyCellar;
