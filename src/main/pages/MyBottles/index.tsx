import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Bottles from 'services/api/bottles';
import { BottleProps } from 'services/type/bottle';
import BottleItem from './BottleItem';

const MyBottles = () => {
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
                <BottleItem key={idx} bottle={bottle} />
            ))}
        </SafeAreaView>
    );
};

export default MyBottles;
