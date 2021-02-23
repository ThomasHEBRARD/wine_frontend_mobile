import React, { useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';
import PasswordInput from './PasswordInput';
import { SignInProps } from 'services/type/authentication';
import loginClient from 'services/api/authentication';
import { connect, useDispatch } from 'react-redux';
import { ReducerStateProps } from 'services/reducers/combinedReducers';

const Login = (props: { navigation: any }) => {
    const { navigation } = props;
    const dispatch = useDispatch();

    const signIn = async (data: SignInProps) => {
        const response = await loginClient.login(data.email.toLowerCase(), data.password);
        const action = { type: 'SIGN_IN', value: response.token };
        dispatch(action);
        navigation.navigate('MainRoute');
    };
    const [data, setData] = useState({ email: '', password: '' });

    return (
        <SafeAreaView>
            <TextInput
                placeholder={'example@xxx.yy'}
                autoCompleteType={'off'}
                autoCapitalize="none"
                autoCorrect={false}
                value={data.email}
                onChangeText={(newText: string) => setData({ ...data, email: newText })}
            />
            <View style={{ width: '70%' }}>
                <PasswordInput
                    password={data.password}
                    setPassword={(newPassword: string) =>
                        setData({ ...data, password: newPassword })
                    }
                />
            </View>
            <Button
                icon={SVG_ICON.PROFILE}
                text={'Sign In'}
                subtext={'Sign In'}
                onClick={() => signIn({ email: 'm@gmail.com', password: '1234' })}
            />
            <Button
                icon={SVG_ICON.PROFILE}
                text={'Sign In'}
                subtext={'Sign In'}
                onClick={() => signIn({ email: 'm2@gmil.com', password: '1234' })}
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

const mapStateToProps = (state: ReducerStateProps) => {
    return { userToken: state.authReducer.userToken };
};
const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return { dispatch: (action: any) => dispatch(action) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
