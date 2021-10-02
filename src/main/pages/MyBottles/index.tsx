import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import Bottles from 'services/api/bottles';
import { BottleProps } from 'services/type/bottle';
import BottleItem from './BottleItem';

const MyBottles = () => {
    const [bottles, setBottles] = useState<BottleProps[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await Bottles.getBottles({ search });
            setBottles(data?.results);
            console.log(data?.results);
        };
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
            {bottles?.map((bottle: any, idx: number) => (
                <BottleItem key={idx} bottle={bottle} />
            ))}
        </SafeAreaView>
    );
};

export default MyBottles;
