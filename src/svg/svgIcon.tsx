import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { D_SVG_ICON } from './enum';

const SvgIcon = (props: { icon: string; width?: number; height?: number; color?: string }) => {
    const { icon, width, height, color } = props;
    return (
        <Svg width={width ?? 32} height={height ?? 32} viewBox="0 0 32 32" fill="none">
            <Path
                d={D_SVG_ICON[icon]}
                stroke={color ?? '#000'}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
export default SvgIcon;
