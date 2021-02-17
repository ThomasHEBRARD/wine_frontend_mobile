import React, { useContext, useState } from 'react';
import { SafeAreaView, View, TextInput } from 'react-native';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';
import PasswordInput from './PasswordInput';
import { AuthContext } from '.';

const SignUp = () => {
    const defaultText = {
        firstName: 'Michael',
        lastName: 'Scott',
        email: 'example@xxx.yyy',
    };

    const { signUp } = useContext(AuthContext);

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
                onChangeText={(newText: string) => setFirstName(newText)}
            />
            <View style={{ height: '5%' }}></View>
            <TextInput
                placeholder={defaultText.lastName}
                autoCompleteType={'off'}
                autoCorrect={false}
                value={lastName}
                onChangeText={(newText: string) => setLastName(newText)}
            />
            <View style={{ height: '5%' }}></View>
            <TextInput
                placeholder={defaultText.email}
                autoCompleteType={'off'}
                autoCorrect={false}
                value={email}
                onChangeText={(newText: string) => setEmail(newText)}
            />
            <View style={{ height: '5%' }}></View>
            <PasswordInput password={password} setPassword={setPassword} />

            <Button icon={SVG_ICON.PROFILE} text={'Signup'} subtext={''} onClick={signUp} />
        </SafeAreaView>
    );
};

export default SignUp;
