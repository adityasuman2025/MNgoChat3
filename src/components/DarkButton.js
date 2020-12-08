import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import {
    THEME_DARK_PURPLE,
    LIGHT_GREY,
} from "../constants";

export default function DarkButton({
    customStyle,
    textStyle,
    buttonText = "Button",
    onPress,
}) {
    return (
        <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "85%",
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 16,
        marginVertical: 10,
        fontSize: 16,
        color: '#f1f1f1',
        backgroundColor: THEME_DARK_PURPLE,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: LIGHT_GREY,
    }
});
