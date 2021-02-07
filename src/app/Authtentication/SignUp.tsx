import React, { useState } from 'react';
import { SafeAreaView, View, TextInput } from 'react-native';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';
import loginClient from 'services/api/authentication';
import PasswordInput from './PasswordInput';

const SignUp = () => {
    const defaultText = {
        firstName: 'Michael',
        lastName: 'Scott',
        email: 'example@xxx.yyy',
    };
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView>
            <TextInput
                placeholder={defaultText.firstName}
                autoCompleteType={'off'}
                autoCorrect={false}
                value={firstName}
                onChange={(newText: any) => setFirstName(newText)}
            />
            <View style={{ height: '5%' }}></View>
            <TextInput
                placeholder={defaultText.lastName}
                autoCompleteType={'off'}
                autoCorrect={false}
                value={lastName}
                onChange={(newText: any) => setLastName(newText)}
            />
            <View style={{ height: '5%' }}></View>
            <TextInput
                placeholder={defaultText.email}
                autoCompleteType={'off'}
                autoCorrect={false}
                value={email}
                onChange={(newText: any) => setEmail(newText)}
            />
            <View style={{ height: '5%' }}></View>
            <PasswordInput password={password} setPassword={setPassword} />

            <Button
                icon={SVG_ICON.PROFILE}
                text={'Signup'}
                subtext={''}
                onClick={() => {
                    loginClient.signUp({
                        first_name: firstName,
                        last_name: lastName,
                        email,
                        password,
                    });
                }}
            />
        </SafeAreaView>
    );
};

export default SignUp;
