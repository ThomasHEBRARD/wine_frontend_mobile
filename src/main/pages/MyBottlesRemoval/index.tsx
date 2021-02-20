import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Bottles from 'services/api/bottles';
import { BottleProps } from 'services/type/bottle';
import BottleItemRemoval from './BottleItemRemoval';

const MyBottlesRemoval = () => {
    const [bottlesToRemove, setBottlesToRemove] = useState<BottleProps[]>([]);
    const [bottles, setBottles] = useState<BottleProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await Bottles.getBottles();
            setBottles(data?.results);
        };
        fetchData();
    }, []);

    return (
        <SafeAreaView>
            <Text>Search Field (elastic search)</Text>

            {bottles?.map((bottle: any, idx: number) => (
                <BottleItemRemoval
                    key={idx}
                    bottle={bottle}
                    bottlesToRemove={bottlesToRemove}
                    setBottlesToRemove={setBottlesToRemove}
                />
            ))}
        </SafeAreaView>
    );
};

export default MyBottlesRemoval;
