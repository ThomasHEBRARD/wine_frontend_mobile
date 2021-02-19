import React from 'react';
import { TouchableHighlight } from 'react-native';
import SvgIcon from 'svg/svgIcon';

export const MenuLink = (props: { icon: string; onClick?: () => void }) => {
    const { icon, onClick } = props;
    return (
        <TouchableHighlight underlayColor={'red'} onPress={onClick}>
            <SvgIcon icon={icon} />
        </TouchableHighlight>
    );
};
export default MenuLink;
