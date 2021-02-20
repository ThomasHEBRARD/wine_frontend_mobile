import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Bottles from 'services/api/bottles';
const MyBottles = () => {
    const [bottles, setBottles] = useState<any[]>([]);

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
                <Text key={idx}>{bottle.name}</Text>
            ))}
        </SafeAreaView>
    );
};

export default MyBottles;
