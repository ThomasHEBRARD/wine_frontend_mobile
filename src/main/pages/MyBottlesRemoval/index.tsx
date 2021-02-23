import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import bottle from 'services/api/bottles';
import Button from 'component/Button';
import Bottles from 'services/api/bottles';
import Store from 'services/reducers/store';
import { BottleProps } from 'services/type/bottle';
import { SVG_ICON } from 'svg/enum';
import BottleItemRemoval from './BottleItemRemoval';
import { connect, useDispatch } from 'react-redux';
import { ReducerStateProps } from 'services/reducers/combinedReducers';

const MyBottlesRemoval = () => {
    const [bottles, setBottles] = useState<BottleProps[]>([]);
    const [search, setSearch] = useState<string>('');

    const dispatch = useDispatch();

    const fetchData = async () => {
        const data = await Bottles.getBottles({ search });
        setBottles(data?.results);
    };

    useEffect(() => {
        fetchData();
    }, [search]);

    return (
        <SafeAreaView>
            <TextInput
                placeholder={'Cambon la Pelouse'}
                autoCompleteType={'off'}
                autoCapitalize="none"
                autoCorrect={false}
                value={search}
                onChangeText={(newText: string) => setSearch(newText)}
            />

            <Button
                icon={SVG_ICON.EYE_OPEN}
                text={''}
                subtext={''}
                onClick={async () => {
                    const bottlesToRemove = Store.getState().removedBottlesReducer.bottlesToRemove;
                    await bottle.removeBottles(bottlesToRemove).then(() => {
                        dispatch({ type: 'RESET_BOTTLE_TO_REMOVE' });
                        fetchData();
                    });
                }}
            />
            {bottles?.map((bottle: any, idx: number) => (
                <BottleItemRemoval key={idx} bottle={bottle} />
            ))}
        </SafeAreaView>
    );
};

const mapStateToProps = (state: ReducerStateProps) => {
    return { bottlesToRemove: state.removedBottlesReducer.bottlesToRemove };
};
const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return { dispatch: (action: any) => dispatch(action) };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyBottlesRemoval);
