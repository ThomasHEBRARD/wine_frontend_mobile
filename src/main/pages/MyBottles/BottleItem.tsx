import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { BottleProps } from 'services/type/bottle';

// usestate of bottles to remove in redux

const BottleItem = (props: { bottle: BottleProps }) => {
    const { bottle } = props;
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <TouchableHighlight
                underlayColor={'yellow'}
                onPress={() => navigation.navigate('BottlePage', { bottle: bottle })}
            >
                <Text>
                    {bottle.name}
                    {'   '}
                    {bottle.stock}
                </Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
};

export default BottleItem;
