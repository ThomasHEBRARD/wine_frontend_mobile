import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { D_SVG_ICON } from './enum';

const SvgIcon = (props: { icon: string; width?: number; height?: number; color?: string }) => {
    const { icon, width, height, color } = props;
    const d_paths = D_SVG_ICON[icon];

    return (
        <Svg width={width ?? 32} height={height ?? 32} viewBox="0 0 32 32" fill="none">
            {d_paths.map((d: string, index: number) => (
                <Path
                    key={index}
                    d={d}
                    stroke={color ?? '#000'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ))}
        </Svg>
    );
};
export default SvgIcon;
