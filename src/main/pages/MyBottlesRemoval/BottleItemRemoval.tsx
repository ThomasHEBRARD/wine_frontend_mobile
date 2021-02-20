import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import { BottleProps } from 'services/type/bottle';

// bottles to remove in redux

const BottleItemRemoval = (props: {
    bottle: BottleProps;
    bottlesToRemove: BottleProps[];
    setBottlesToRemove: React.Dispatch<React.SetStateAction<BottleProps[]>>;
}) => {
    const { bottle, bottlesToRemove, setBottlesToRemove } = props;
    const [stockToRemove, setStockToRemove] = useState<number>(0);
    return (
        <SafeAreaView>
            <TouchableHighlight
                underlayColor={'blue'}
                onPress={() => {
                    setBottlesToRemove([...bottlesToRemove, bottle]);
                    -stockToRemove < bottle.stock && setStockToRemove(stockToRemove - 1);
                }}
            >
                <Text>
                    {bottle.name}
                    {'   '}
                    {bottle.stock}
                    {'    '}
                    {stockToRemove}
                </Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
};

export default BottleItemRemoval;
