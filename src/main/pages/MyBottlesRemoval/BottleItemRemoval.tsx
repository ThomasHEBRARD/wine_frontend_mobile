import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { removedBottlesProps } from 'services/reducers/removedBottles';
import Store from 'services/reducers/store';
import { BottleProps } from 'services/type/bottle';

const BottleItemRemoval = (props: { bottle: BottleProps }) => {
    const { bottle } = props;
    const dispatch = useDispatch();
    
    const bottlesToRemove = Store.getState()?.removedBottlesReducer.bottlesToRemove;
    
    const [stockToRemove, setStockToRemove] = useState<number>(
        bottlesToRemove?.find((bottles: removedBottlesProps) => bottles.bottleId === bottle.id)
            ?.stockToRemove ?? 0
    );

    return (
        <SafeAreaView>
            <Text>{bottle.name}</Text>
            <TouchableHighlight
                disabled={!(stockToRemove > 0)}
                underlayColor={'blue'}
                onPress={() => {
                    if (stockToRemove > 0) {
                        setStockToRemove(stockToRemove - 1);
                        dispatch({
                            type: 'REMOVE_BOTTLE_TO_REMOVE',
                            value: { bottleId: bottle.id },
                        });
                    }
                }}
            >
                <Text>{'  -  '}</Text>
            </TouchableHighlight>
            <Text>{bottle.stock}</Text>
            <TouchableHighlight
                disabled={!(stockToRemove < bottle.stock)}
                underlayColor={'blue'}
                onPress={() => {
                    if (stockToRemove < bottle.stock) {
                        setStockToRemove(stockToRemove + 1);
                        dispatch({
                            type: 'ADD_BOTTLE_TO_REMOVE',
                            value: { bottleId: bottle.id },
                        });
                    }
                }}
            >
                <Text>{'  +  '}</Text>
            </TouchableHighlight>
            <Text>{'     '}</Text>
            <Text>{stockToRemove}</Text>
        </SafeAreaView>
    );
};

const mapStateToProps = (state: { bottlesToRemove: any }) => {
    return { bottlesToRemove: state.bottlesToRemove };
};
const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return { dispatch: (action: any) => dispatch(action) };
};
export default connect(mapStateToProps, mapDispatchToProps)(BottleItemRemoval);
