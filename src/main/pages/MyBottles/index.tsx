import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Button from 'component/Button';
import { SVG_ICON } from 'svg/enum';
import Bottles from 'services/api/bottles';
const MyBottles = () => {
    const [bottles, setBottles] = useState<any[]>([]);
    return (
        <SafeAreaView>
            <Text>Search Field (elastic search)</Text>
            <Button
                icon={SVG_ICON.SETTINGS}
                text={'bottles'}
                subtext={''}
                onClick={async () => {
                    const bot = await Bottles.getBottles();
                    setBottles(bot);
                }}
            />
            {bottles?.map((bottle: any) => (
                <Text>{bottle.name}</Text>
            ))}
        </SafeAreaView>
    );
};

export default MyBottles;
