import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { BottleProps } from 'services/type/bottle';

// usestate of bottles to remove in redux

const BottleItem = (props: { bottle: BottleProps }) => {
    const { bottle } = props;
    return (
        <SafeAreaView>
            <Text>
                {bottle.name}
                {'   '}
                {bottle.stock}
            </Text>
        </SafeAreaView>
    );
};

export default BottleItem;
