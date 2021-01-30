import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SVG_ICON } from 'svg/enum';
import Button from './Button';

const DoubleButton = () => {
    const style = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',

            alignSelf: 'center',
            borderRadius: 6,
        },
    });
    return (
        <View style={style.container}>
            <Button
                needsDouble
                icon={SVG_ICON.PLUS}
                text={'Ajouter'}
                subtext={'Ajouter à ma cave'}
            />
            <Button
                needsDouble
                icon={SVG_ICON.MINUS}
                text={'Boire'}
                subtext={'Retirer de ma cave'}
            />
        </View>
    );
};

export default DoubleButton;
