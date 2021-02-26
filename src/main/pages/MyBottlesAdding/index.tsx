import React, { useCallback, useEffect, useState, Fragment } from 'react';
import { SafeAreaView } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import bottle from 'services/api/bottles';
import { BottleCollectionProps, BottleFilters } from 'services/type/bottle';
import _ from 'lodash';
import { useUnicity } from 'services/helpers/useUnicity';

interface SearchableDropdownItemsProps {
    id: string;
    [key: string]: string;
}

const MyBottlesAdding = () => {
    // const [bottleData, setBottleData] = useState<BottleCollectionProps>();
    const [bottleFilters, setBottleFilters] = useState<BottleFilters>({ limit: 20, offset: 0 });
    const [bottleSearch, setBottleSearch] = useState<{ search: string | number }>({ search: '' });
    const [foundBottles, setFoundBottles] = useState<BottleCollectionProps[]>([]);

    const debouncedSearchCall = useCallback(
        _.debounce(async () => {
            const searchData = await bottle.searchBottleForAdding(bottleSearch);
            setFoundBottles(searchData?.results);
        }, 500),
        [bottleSearch]
    );

    useEffect(() => {
        debouncedSearchCall();
        return debouncedSearchCall.cancel;
    }, [bottleSearch]);

    return (
        <SafeAreaView>
            <Fragment>
                <SearchableDropdown
                    resetValue={false}
                    onItemSelect={async (item: SearchableDropdownItemsProps) => {
                        setBottleFilters({ ...bottleFilters, name: item.name });
                        const data = await bottle.searchBottleForAdding({
                            ...bottleFilters,
                            name: item.name,
                        });
                        setFoundBottles(data?.results);
                    }}
                    items={
                        useUnicity(foundBottles, 'name')?.map((bottle: BottleCollectionProps) => ({
                            id: bottle.id,
                            name: bottle.name,
                        })) ?? []
                    }
                    itemStyle={{
                        padding: 3,
                        marginTop: 2,
                        backgroundColor: '#ddd',
                        borderColor: '#bbb',
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    listProps={{ nestedScrollEnabled: true }}
                    textInputProps={{
                        value: bottleFilters?.name,
                        placeholder: 'Name',
                        onTextChange: (newText: string) => {
                            setBottleFilters({ ...bottleFilters, name: newText });
                            setBottleSearch({ search: newText });
                        },
                        autoCompleteType: 'off',
                        autoCapitalize: 'none',
                        autoCorrect: false,
                    }}
                />
                <SearchableDropdown
                    onItemSelect={async (item: SearchableDropdownItemsProps) => {
                        setBottleFilters({ ...bottleFilters, millesime: Number(item.name) });
                        const data = await bottle.searchBottleForAdding({
                            ...bottleFilters,
                            name: item.name,
                        });
                        setFoundBottles(data?.results);
                    }}
                    items={
                        useUnicity(foundBottles, 'millesime')?.map(
                            (bottle: BottleCollectionProps) => ({
                                id: bottle.id,
                                name: bottle.millesime?.toString(),
                            })
                        ) ?? []
                    }
                    itemStyle={{
                        padding: 3,
                        marginTop: 2,
                        backgroundColor: '#ddd',
                        borderColor: '#bbb',
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    textInputProps={{
                        placeholder: 'Millesime',
                        value: bottleFilters?.millesime,
                        onTextChange: (newNumber: number) => {
                            setBottleFilters({ ...bottleFilters, millesime: newNumber });
                            setBottleSearch({ search: newNumber });
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
