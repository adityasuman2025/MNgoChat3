import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
    GRADIENT_PURPLE_LIGHT,
    GRADIENT_PURPLE_DARK,
} from "../constants";
import { globalStyles } from '../styles/globalStyles';

export default function PurpleGradientContainer({
    customStyle,
    children,
}) {
    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            locations={[0, 0.5]}
            colors={[GRADIENT_PURPLE_LIGHT, GRADIENT_PURPLE_DARK]}
            style={[globalStyles.root, customStyle]}
        >
            {children}
        </LinearGradient>
    );
}