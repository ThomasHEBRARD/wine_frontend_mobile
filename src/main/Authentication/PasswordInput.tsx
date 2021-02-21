import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SVG_ICON } from 'svg/enum';
import SvgIcon from 'svg/svgIcon';

const PasswordInput = (props: { password: string; setPassword: (newPassword: string) => void }) => {
    const { password, setPassword } = props;

    const [security, setSecurity] = useState(true);

    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: '30%' }}>
                <TextInput
                    autoCompleteType={'off'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    secureTextEntry={security}
                    value={password}
                    onChangeText={(newText: string) => setPassword(newText)}
                />
            </View>
            <TouchableWithoutFeedback onPress={() => setSecurity(!security)}>
                <SvgIcon icon={security ? SVG_ICON.EYE_OPEN : SVG_ICON.EYE_CLOSE} />
            </TouchableWithoutFeedback>
        </View>
    );
};

export default PasswordInput;
