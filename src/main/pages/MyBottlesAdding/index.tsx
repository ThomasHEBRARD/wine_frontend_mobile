import React, { useCallback, useEffect, useState, Fragment, useRef } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import bottle from 'services/api/bottles';
import { BottleCollectionProps, BottleFilters } from 'services/type/bottle';
import _ from 'lodash';
import BottleAdding from 'component/BottleAdding';
import DropDownPicker from 'react-native-dropdown-picker';
import { useUnicity } from 'services/helpers/useUnicity';

const MyBottlesAdding = () => {
    const [stockToAdd, setStockToAdd] = useState<number>(1);
    const [bottleFilters, setBottleFilters] = useState<BottleFilters>({ limit: 20, offset: 0 });
    const [bottleSearch, setBottleSearch] = useState<{ search: string | number }>({ search: '' });
    const [foundBottles, setFoundBottles] = useState<BottleCollectionProps[]>([]);
    const [temporaryBottle, setTemporaryBottle] = useState<BottleCollectionProps>();

    const debouncedSearchCall = useCallback(
        _.debounce(async () => {
            const searchData = await bottle.searchBottleForAdding(bottleSearch);
            setFoundBottles(searchData?.results);
        }, 500),
        [bottleSearch]
    );

    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            debouncedSearchCall();
        }
        return debouncedSearchCall.cancel;
    }, [bottleSearch, debouncedSearchCall]);

    const entries = ['name', 'millesime', 'appelation', 'cepage'];

    return (
        <SafeAreaView>
            <Fragment>
                {entries.map((entry: string, idx: number) => (
                    <BottleAdding
                        key={idx}
                        temporaryBottle={temporaryBottle}
                        setTemporaryBottle={setTemporaryBottle}
                        bottleFilters={bottleFilters}
                        setBottleFilters={setBottleFilters}
                        foundBottles={foundBottles}
                        setFoundBottles={setFoundBottles}
                        setBottleSearch={setBottleSearch}
                        concernedKey={entry}
                    />
                ))}
                <DropDownPicker
                    items={
                        useUnicity(foundBottles, 'millesime')?.map(
                            (bottle: BottleCollectionProps) => ({
                                id: bottle.id,
                                name: bottle.millesime?.toString(),
                            })
                        ) ?? []
                    }
                />
            </Fragment>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Button
                    title={'-'}
                    onPress={() => stockToAdd - 1 > 0 && setStockToAdd(stockToAdd - 1)}
                    disabled={stockToAdd - 1 <= 0}
                />
                <Text>{stockToAdd}</Text>
                <Button title={'+'} onPress={() => setStockToAdd(stockToAdd + 1)} />
            </View>
            <Button
                title={'Add'}
                onPress={async () =>
                    temporaryBottle &&
                    (await bottle.addBottle({ chosenBottleId: temporaryBottle.id, stockToAdd }))
                }
            />
        </SafeAreaView>
    );
};

export default MyBottlesAdding;
