import MenuLink from 'main/Menu/MenuLink';
import { SafeAreaView } from 'react-native';
import React from 'react';
import { SVG_ICON } from 'svg/enum';
import { useNavigation } from '@react-navigation/native';

const BackArrow = (props: { navigation: any }) => {
    // const { navigation } = props;
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ width: '10%' }}>
            <MenuLink icon={SVG_ICON.LEFT_ARROW} onClick={() => navigation.goBack()} />
        </SafeAreaView>
    );
};

export default BackArrow;
