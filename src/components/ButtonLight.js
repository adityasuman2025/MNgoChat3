import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import {
    THEME_DARK_PURPLE,
    LIGHT_GREY,
} from "../constants";

import LoaderDark from "./LoaderDark";

export default function ButtonLight({
    customStyle,
    textStyle,
    showLoader,
    buttonText = "Button",
    onPress,
}) {
    return (
        <TouchableOpacity
            style={[styles.container, customStyle]}
            onPress={!showLoader ? onPress : null}
        >
            {
                showLoader ?
                    <LoaderDark />
                    :
                    <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "85%",
        height: 48,
        borderRadius: 25,
        paddingHorizontal: 16,
        marginVertical: 10,
        fontSize: 16,
        color: '#f1f1f1',
        backgroundColor: LIGHT_GREY,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: THEME_DARK_PURPLE,
    }
});
