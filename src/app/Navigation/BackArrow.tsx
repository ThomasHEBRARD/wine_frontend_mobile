import MenuLink from 'app/Menu/MenuLink';
import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { SVG_ICON } from 'svg/enum';

const BackArrow = (props: { navigation: any }) => {
    const { navigation } = props;

    return (
        <SafeAreaView>
            <MenuLink icon={SVG_ICON.LEFT_ARROW} onClick={() => navigation.goBack()} />
        </SafeAreaView>
    );
};

export default BackArrow;
