import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import bottle from 'services/api/bottles';
import { BottleProps } from 'services/type/bottle';
import BottleItem from '../MyBottles/BottleItem';
import _ from 'lodash';

const MyBottlesAdding = () => {
    const [name, setName] = useState<string>('');
    const [foundBottles, setFoundBottles] = useState<BottleProps[]>([]);

    const debouncedSearchCall = useCallback(
        _.debounce(async () => {
            const response = await bottle.searchBottleForAdding({ search: name });
            setFoundBottles(response?.results);
        }, 600),
        [name]
    );

    useEffect(() => {
        debouncedSearchCall();
        return debouncedSearchCall.cancel;
    }, [name, debouncedSearchCall]);

    return (
        <SafeAreaView>
            <TextInput
                placeholder={'Nom de la bouteille'}
                autoCompleteType={'off'}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newText: string) => {
                    setName(newText);
                }}
            />
            {foundBottles?.map((bottle: any) => (
                <BottleItem bottle={bottle} />
            ))}
        </SafeAreaView>
    );
};

export default MyBottlesAdding;
