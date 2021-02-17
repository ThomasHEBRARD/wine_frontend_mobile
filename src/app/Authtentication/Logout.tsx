import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { SafeAreaView, TouchableHighlight } from 'react-native';
import { SVG_ICON } from 'svg/enum';
import SvgIcon from 'svg/svgIcon';
import { AuthContext } from '.';

const Logout = () => {
    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <TouchableHighlight underlayColor={'red'} onPress={() => signOut(navigation)}>
                <SvgIcon icon={SVG_ICON.PROFILE} />
            </TouchableHighlight>
        </SafeAreaView>
    );
};

export default Logout;
