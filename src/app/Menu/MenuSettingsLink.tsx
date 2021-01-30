import React from 'react';
import { SafeAreaView, View } from 'react-native';
import SettingsIcon from 'svg/settingsIcon';

const SettingsPage = () => {
    return <SafeAreaView></SafeAreaView>;
};

export const MenuSettingsLink = () => {
    return (
        <View>
            <SettingsIcon width={32} height={32} />
        </View>
    );
};
export default SettingsPage;
