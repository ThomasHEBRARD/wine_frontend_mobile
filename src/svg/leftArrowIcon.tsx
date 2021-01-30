import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SettingsIcon = (props: { width?: number; height?: number }) => {
    const { width, height } = props;
    return (
        <Svg width={width ?? 32} height={height ?? 32} viewBox={"0 0 ${}32 32"} fill="none">
            <Path
                d="M27 16H5M14 7l-9 9 9 9"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
export default SettingsIcon;
