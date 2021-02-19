import React, { useState } from 'react';
import { SafeAreaView, View, TextInput } from 'react-native';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';
import PasswordInput from './PasswordInput';
import loginClient from 'services/api/authentication';
import { SignUpProps } from 'services/type/authentication';

const SignUp = () => {
    const defaultText = {
        firstName: 'Michael',
        lastName: 'Scott',
        email: 'example@xxx.yyy',
    };

    const signUp = async (data: SignUpProps) => {
        loginClient.signUp({
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password,
        });
        // setState(authReducer(_, { type: 'SIGN_IN', value: 'dummy-auth-token' }));
    };

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    return (
        <SafeAreaView>
            <TextInput
                placeholder={defaultText.firstName}
                autoCompleteType={'off'}
                autoCorrect={false}
                value={data.firstName}
                onChangeText={(newText: string) => setData({ ...data, firstName: newText })}
            />
            <View style={{ height: '5%' }}></View>
            <TextInput
                placeholder={defaultText.lastName}
                autoCompleteType={'off'}
                autoCorrect={false}
                value={data.lastName}
                onChangeText={(newText: string) => setData({ ...data, lastName: newText })}
            />
            <View style={{ height: '5%' }}></View>
            <TextInput
                placeholder={defaultText.email}
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

export default SignUp;
