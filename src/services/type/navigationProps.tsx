import { StackNavigationProp } from '@react-navigation/stack';
import { BottleProps } from './bottle';

export type RootStackParamList = {
    BottlePage: { bottle: BottleProps };
    MyCellar: undefined;
    MyBottlesRemoval: undefined;
    MyBottles: undefined;
    Profile: undefined;
    Settings: undefined;
    CELLAR: undefined;
    PROFILE: undefined;
    LOGIN: undefined;
    SIGNUP: undefined;
    OnBoarding: undefined;
    Login: undefined;
    MainrRoute: undefined;
};

export type BottlePageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BottlePage'>;
