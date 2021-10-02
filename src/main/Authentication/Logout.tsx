import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import loginClient from 'services/api/authentication';
import { SVG_ICON } from 'svg/enum';
import SvgIcon from 'svg/svgIcon';
import { connect, useDispatch } from 'react-redux';
import { ReducerStateProps } from 'services/reducers/combinedReducers';

const Logout = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const signOut = async () => {
        const action = { type: 'SIGN_OUT' };
        await loginClient.logout();
        dispatch(action);
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView>
            <TouchableHighlight underlayColor={'red'} onPress={signOut}>
                <>
                    <SvgIcon icon={SVG_ICON.PROFILE} />
                    <Text>Logout</Text>
                </>
            </TouchableHighlight>
        </SafeAreaView>
    );
};

const mapStateToProps = (state: ReducerStateProps) => {
    return { userToken: state.authReducer.userToken };
};
const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return { dispatch: (action: any) => dispatch(action) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
