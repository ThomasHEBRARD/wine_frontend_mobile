import React from 'react';
import { SafeAreaView, TouchableHighlight } from 'react-native';
import { SVG_ICON } from 'svg/enum';
import SvgIcon from 'svg/svgIcon';

const SettingsPage = () => {
    return <SafeAreaView></SafeAreaView>;
};

export const MenuProfileLink = () => {
    return (
        <TouchableHighlight underlayColor={'red'} onPress={() => undefined}>
            <SvgIcon icon={SVG_ICON.PROFILE} />
        </TouchableHighlight>
    );
};
export default SettingsPage;
