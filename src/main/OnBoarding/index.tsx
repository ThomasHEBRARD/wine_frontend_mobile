import React, { useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

const OnBoarding = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const bootstratAsync = async () => {
            try {
                const userToken = 'dummy';
                // test if right token
                if (userToken) {
                    navigation.navigate('MainRoute');
                } else {
                    navigation.navigate('Login');
                }
            } catch (e) {
                // restoring token failed
            }
            // setState(authReducer(state, { type: 'RESTORE_TOKEN', value: userToken }));
        };
        bootstratAsync();
    }, []);

    return (
        <SafeAreaView>
            <Text>OnBoardin</Text>
        </SafeAreaView>
    );
};

export default connect()(OnBoarding);
