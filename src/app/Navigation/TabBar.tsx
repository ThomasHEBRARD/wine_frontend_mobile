import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SVG_ICON } from 'svg/enum';
import SvgIcon from 'svg/svgIcon';

const TabBar = (props: { state: any; descriptors: any; navigation: any }) => {
    const { state, descriptors, navigation } = props;
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) return null;

    const style = StyleSheet.create({
        tabBar: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: '20%',
            marginRight: '20%',
        },
    });
    return (
        <View style={style.tabBar}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.title.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                const onLongPress = () => {
                    navigation.emit({ type: 'tabLongPress', target: route.key });
                };

                // TODO Test that labels are the right one
                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <SvgIcon icon={SVG_ICON[label]} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabBar;
