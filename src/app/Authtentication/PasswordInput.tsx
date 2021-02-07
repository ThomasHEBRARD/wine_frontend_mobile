import React, { useState } from 'react';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SVG_ICON } from 'svg/enum';
import SvgIcon from 'svg/svgIcon';

const PasswordInput = (props: { password: string; setPassword: (text: string) => void }) => {
    const { password, setPassword } = props;

    const [security, setSecurity] = useState(true);

    return (
        <>
            <TextInput
                autoCompleteType={'off'}
                autoCorrect={false}
                secureTextEntry={security}
                value={password}
                onChange={(newText: any) => setPassword(newText)}
            />
            <TouchableWithoutFeedback
                style={{ backgroundColor: 'red' }}
                onPress={() => setSecurity(!security)}
            >
                <SvgIcon icon={security ? SVG_ICON.EYE_OPEN : SVG_ICON.EYE_CLOSE} />
            </TouchableWithoutFeedback>
        </>
    );
};

export default PasswordInput;
