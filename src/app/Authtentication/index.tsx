import React, { createContext, useContext } from 'react';
import { SafeAreaView } from 'react-native';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';

export const AuthContext = createContext({
    signIn: (data: any) => new Promise<void>((resolve) => resolve()),
    signOut: () => undefined,
    signUp: (data: any) => new Promise<void>((resolve) => resolve()),
});

const Login = (props: { navigation: any }) => {
    const { navigation } = props;
    const { signIn } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <Button icon={SVG_ICON.SETTINGS} text={'login'} subtext={'login'} onClick={signIn} />
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
