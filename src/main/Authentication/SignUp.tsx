import React, { useState } from 'react';
import { SafeAreaView, View, TextInput } from 'react-native';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';
import PasswordInput from './PasswordInput';
import loginClient from 'services/api/authentication';
import { SignUpProps } from 'services/type/authentication';
import { connect, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ReducerStateProps } from 'services/reducers/combinedReducers';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const signUp = async (data: SignUpProps) => {
        const userToken = await loginClient.signUp({
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password,
        });
        const action = { type: 'SIGN_UP', value: userToken };
        dispatch(action);
        navigation.navigate('MainRoute');
    };

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const defaultText = {
        firstName: 'Michael',
        lastName: 'Scott',
        email: 'example@xxx.yyy',
    };

    return (
        <SafeAreaView>
            <TextInput
                placeholder={defaultText.firstName}
                autoCapitalize={'none'}
                autoCompleteType={'off'}
                autoCorrect={false}
                value={data.firstName}
                onChangeText={(newText: string) => setData({ ...data, firstName: newText })}
            />
            <View style={{ height: '5%' }}></View>
            <TextInput
                placeholder={defaultText.lastName}
                autoCapitalize={'none'}
                autoCompleteType={'off'}
                autoCorrect={false}
                value={data.lastName}
                onChangeText={(newText: string) => setData({ ...data, lastName: newText })}
            />
            <View style={{ height: '5%' }}></View>
            <TextInput
                placeholder={defaultText.email}
                autoCapitalize={'none'}
                autoCompleteType={'off'}
                autoCorrect={false}
                value={data.email}
                onChangeText={(newText: string) => setData({ ...data, email: newText })}
            />
            <View style={{ height: '5%' }}></View>
            <PasswordInput
                password={data.password}
                setPassword={(newPassword: string) => setData({ ...data, password: newPassword })}
            />

            <Button
                icon={SVG_ICON.PROFILE}
                text={'Signup'}
                subtext={''}
                onClick={() => signUp(data)}
            />
        </SafeAreaView>
    );
};

const mapStateToProps = (state: ReducerStateProps) => {
    return { userToken: state.authReducer.userToken };
};
const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return { dispatch: (action: any) => dispatch(action) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
