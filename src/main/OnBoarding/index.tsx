import React, { useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';
import Store from 'services/reducers/store';
import { ReducerStateProps } from 'services/reducers/combinedReducers';

const OnBoarding = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const userToken = Store.getState().authReducer.userToken;
            if (userToken) {
                const action = { action: 'RESTORE_TOKEN', value: userToken };
                dispatch(action);
                navigation.navigate('MainRoute');
            } else {
                navigation.navigate('Login');
            }
        } catch (e) {
            // restoring token failed
        }
    }, []);

    return (
        <SafeAreaView>
            <Text>OnBoarding</Text>
        </SafeAreaView>
    );
};

const mapStateToProps = (state: ReducerStateProps) => {
    return { userToken: state.authReducer.userToken };
};
const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return { dispatch: (action: any) => dispatch(action) };
};

export default connect(mapStateToProps, mapDispatchToProps)(OnBoarding);
