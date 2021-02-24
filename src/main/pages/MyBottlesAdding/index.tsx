import React, { useCallback, useEffect, useState, Fragment } from 'react';
import { SafeAreaView } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import bottle from 'services/api/bottles';
import { BlankBottle, BottleProps } from 'services/type/bottle';
import _ from 'lodash';

interface SearchableDropdownItemsProps {
    id: string;
    [key: string]: string;
}

const MyBottlesAdding = () => {
    const [bottleData, setBottleData] = useState<BottleProps>();
    const [bottleSearch, setBottleSearch] = useState<BottleProps>(BlankBottle);
    const [foundBottles, setFoundBottles] = useState<BottleProps[]>([]);

    const debouncedSearchCall = useCallback(
        _.debounce(async () => {
            if (bottleSearch?.name) {
                const response = await bottle.searchBottleForAdding({ search: bottleSearch.name });
                setFoundBottles(response?.results);
            }
        }, 100),
        [bottleSearch?.name]
    );

    useEffect(() => {
        bottleSearch && debouncedSearchCall();
        return debouncedSearchCall.cancel;
    }, [bottleSearch?.name, debouncedSearchCall]);

    return (
        <SafeAreaView>
            <Fragment>
                <SearchableDropdown
                    onItemSelect={(item: SearchableDropdownItemsProps) =>
                        setBottleData(
                            foundBottles.find((bottle: BottleProps) => bottle.id === item.id)
                        )
                    }
                    items={foundBottles?.map((bottle: BottleProps) => ({
                        id: bottle.id,
                        name: bottle.name,
                    }))}
                    itemStyle={{
                        padding: 3,
                        marginTop: 2,
                        backgroundColor: '#ddd',
                        borderColor: '#bbb',
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    containerStyle={{ padding: 5 }}
                    itemTextStyle={{ color: '#222' }}
                    listProps={{ nestedScrollEnabled: true }}
                    textInputProps={{
                        placeholder: 'Name',
                        onTextChange: (newText: string) => {
                            setBottleSearch({ ...bottleSearch, name: newText });
                        },
                        autoCompleteType: 'off',
                        autoCapitalize: 'none',
                        autoCorrect: false,
                    }}
                />
                <SearchableDropdown
                    onItemSelect={(item: SearchableDropdownItemsProps) =>
                        setBottleData(
                            foundBottles.find(
                                (bottle: BottleProps) => bottle.millesime.toString() === item.name
                            )
                        )
                    }
                    items={foundBottles?.map((bottle: BottleProps) => ({
                        id: bottle.id,
                        name: bottle.millesime.toString(),
                    }))}
                    itemStyle={{
                        padding: 3,
                        marginTop: 2,
                        backgroundColor: '#ddd',
                        borderColor: '#bbb',
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    containerStyle={{ padding: 5 }}
                    itemTextStyle={{ color: '#222' }}
                    textInputProps={{
                        placeholder: 'Millesime',
                        onTextChange: (newNumber: number) => {
                            setBottleSearch({ ...bottleSearch, millesime: newNumber });
                        },
                        autoCompleteType: 'off',
                        autoCapitalize: 'none',
                        autoCorrect: false,
                    }}
                />
            </Fragment>
        </SafeAreaView>
    );
};

export default MyBottlesAdding;
