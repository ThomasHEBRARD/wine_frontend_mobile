import React, { createRef } from 'react';
import bottle from 'services/api/bottles';
import { useUnicity } from 'services/helpers/useUnicity';
import { BottleCollectionProps, BottleFilters } from 'services/type/bottle';
import SearchableDropdown from 'react-native-searchable-dropdown';

interface BottleAddingProps {
    temporaryBottle: BottleCollectionProps | undefined;
    setTemporaryBottle: React.Dispatch<React.SetStateAction<BottleCollectionProps | undefined>>;
    bottleFilters: BottleFilters;
    setBottleFilters: React.Dispatch<React.SetStateAction<BottleFilters>>;
    foundBottles: BottleCollectionProps[];
    setFoundBottles: React.Dispatch<React.SetStateAction<BottleCollectionProps[]>>;
    setBottleSearch: React.Dispatch<React.SetStateAction<{ search: string | number }>>;
    concernedKey: string;
}

interface SearchableDropdownItemsProps {
    id: string;
    name: string | number;
}

const BottleAdding = (props: BottleAddingProps) => {
    const {
        temporaryBottle,
        setTemporaryBottle,
        bottleFilters,
        setBottleFilters,
        foundBottles,
        setFoundBottles,
        setBottleSearch,
        concernedKey,
    } = props;

    const ref = createRef();

    return (
        <SearchableDropdown
            resetValue={false}
            onItemSelect={async (item: SearchableDropdownItemsProps) => {
                setTemporaryBottle(foundBottles[0]);
                setBottleFilters({ ...bottleFilters, [concernedKey]: item.name });
                const data = await bottle.searchBottleForAdding({
                    ...bottleFilters,
                    [concernedKey]: item.name,
                });
                setFoundBottles(data?.results);
            }}
            items={
                useUnicity(foundBottles, concernedKey)?.map((bottle: BottleCollectionProps) => ({
                    id: bottle.id,
                    name:
                        concernedKey === 'cepage'
                            ? bottle[concernedKey]
                                  ?.map(
                                      (cepage: { name: string; proportion: number }) =>
                                          (cepage.proportion * 100).toString() + '% ' + cepage.name
                                  )
                                  .join(', ')
                            : bottle[concernedKey]?.toString(),
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
                ref: ref,
                value:
                    concernedKey === 'cepage'
                        ? temporaryBottle?.[concernedKey]
                              ?.map(
                                  (cepage: { name: string; proportion: number }) =>
                                      (cepage.proportion * 100).toString() + '% ' + cepage.name
                              )
                              .join(', ')
                        : temporaryBottle?.[concernedKey]?.toString(),
                placeholder: concernedKey.charAt(0).toUpperCase() + concernedKey.slice(1),
                onTextChange: (newText: string) => {
                    setBottleFilters({ ...bottleFilters, [concernedKey]: newText });
                    setBottleSearch({ search: newText });
                },
                autoCompleteType: 'off',
                autoCapitalize: 'none',
                autoCorrect: false,
            }}
        />
    );
};
export default BottleAdding;
