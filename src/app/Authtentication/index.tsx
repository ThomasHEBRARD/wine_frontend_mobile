import React, { createContext, useContext, useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';
import PasswordInput from './PasswordInput';

export const AuthContext = createContext({
    signIn: (email: string, password: string) => new Promise<void>((resolve) => resolve()),
    signOut: () => undefined,
    signUp: (data: any) => new Promise<void>((resolve) => resolve()),
});

const Login = (props: { navigation: any }) => {
    const { navigation } = props;

    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView>
            <TextInput
                placeholder={'example@xxx.yy'}
                autoCompleteType={'off'}
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(newText: string) => setEmail(newText)}
            />
            <View style={{ width: '70%' }}>
                <PasswordInput password={password} setPassword={setPassword} />
            </View>
            <Button
                icon={SVG_ICON.PROFILE}
                text={'Sign In'}
                subtext={'Sign In'}
                onClick={() => signIn(email, password)}
            />
            <Button
                icon={SVG_ICON.PROFILE}
                text={'Sign Up'}
                subtext={'Not a member yet ?'}
                onClick={() => navigation.navigate('SIGNUP')}
            />
        </SafeAreaView>
    );
};

export default Login;
