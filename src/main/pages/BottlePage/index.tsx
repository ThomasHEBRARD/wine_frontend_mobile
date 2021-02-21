import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { RootStackParamList, BottlePageScreenNavigationProp } from 'services/type/navigationProps';

interface BottlePageProps {
    route: RouteProp<RootStackParamList, 'BottlePage'>;
    navigation: BottlePageScreenNavigationProp;
}

const BottlePage = (props: BottlePageProps) => {
    const { route } = props;
    const bottle = route.params.bottle;

    return (
        <SafeAreaView>
            <Text>{bottle.name}</Text>
        </SafeAreaView>
    );
};

export default BottlePage;
