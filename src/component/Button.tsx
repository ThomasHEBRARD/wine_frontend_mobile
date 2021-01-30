import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import SvgIcon from 'svg/svgIcon';

const TextSection = (props: { text: string }) => {
    const { text } = props;
    const textStyle = StyleSheet.create({
        container: {
            color: '#595959',
            fontSize: 15,
            fontFamily: 'Galvji',
        },
    });
    return <Text style={textStyle.container}>{text}</Text>;
};

const SubTextSection = (props: { subtext: string }) => {
    const { subtext } = props;
    const subTextStyle = StyleSheet.create({
        container: {
            color: '#D1D1D1',
            fontSize: 12,
            fontFamily: 'Galvji',
        },
    });
    return <Text style={subTextStyle.container}>{subtext}</Text>;
};
interface ButtonProps {
    onPress?: () => void;
    needsDouble?: boolean;
    icon: string;
    text: string;
    subtext: string;
}

const Button = (props: ButtonProps) => {
    const { onPress, needsDouble, icon, text, subtext } = props;

    const style = StyleSheet.create({
        touchable: {
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 6,
            width: needsDouble ? '45%' : undefined,
            padding: '1%',
        },
        icon: {
            marginRight: needsDouble ? '8%' : '4%',
            padding: needsDouble ? '2%' : '1%',
            width: needsDouble ? '20%' : '10%',
            alignItems: 'center',
            borderRadius: 6,
            backgroundColor: '#F4F4F4',
        },
    });

    return (
        <TouchableHighlight
            style={style.touchable}
            underlayColor={'#F4F4F4'}
            onPress={onPress ?? (() => undefined)}
        >
            <>
                <View style={style.icon}>
                    <SvgIcon icon={icon} color="#C5CAFF" />
                </View>
                <View>
                    <TextSection text={text} />
                    <SubTextSection subtext={subtext} />
                </View>
            </>
        </TouchableHighlight>
    );
};
export default Button;
