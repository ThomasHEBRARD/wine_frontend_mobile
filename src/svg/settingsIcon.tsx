import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SettingsIcon = () => {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
            <Path
                d="M16 13.5V27M16 5v3.5M16 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM25 23.5V27M25 5v13.5M25 23.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM7 19.5V27M7 5v9.5M7 19.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
export default SettingsIcon;
