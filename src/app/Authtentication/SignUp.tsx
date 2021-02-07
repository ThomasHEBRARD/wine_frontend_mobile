import React, { useState } from 'react';
import { SafeAreaView, View, TextInput } from 'react-native';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';
import loginClient from 'services/api/authentication';

const SignUp = () => {
    const [firstName, setFirstName] = useState('Michael');
    const [lastName, setLastName] = useState('Scott');
    const [email, setEmail] = useState('michaelscottpapercompany@gmail.com');
    const [password, setPassword] = useState('1234');

    return (
        <SafeAreaView>
            <TextInput
                style={{ backgroundColor: 'grey' }}
                value={firstName}
                onChange={(newText: any) => setFirstName(newText)}
            />
            <View style={{ height: '5%' }}></View>
            <TextInput
                style={{ backgroundColor: 'grey' }}
                value={lastName}
                onChange={(newText: any) => setLastName(newText)}
            />
            <View style={{ height: '5%' }}></View>
            <TextInput
                style={{ backgroundColor: 'grey' }}
                value={email}
                onChange={(newText: any) => setEmail(newText)}
            />
            <View style={{ height: '5%' }}></View>
            <TextInput
                style={{ backgroundColor: 'grey' }}
                value={password}
                onChange={(newText: any) => setPassword(newText)}
            />

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
