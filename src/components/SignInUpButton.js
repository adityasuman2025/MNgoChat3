import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import {
    LIGHT_GREY,
} from "../constants";

export default function SignInUpButton({
    customStyle,
    textStyle,
    otherText,
    buttonText = "Button",
    onPress,
}) {
    return (
        <View style={[styles.signupTextCont, customStyle]}>
            {
                otherText ?
                    <Text style={styles.signupText}>{otherText}</Text>
                    : null
            }

            <TouchableOpacity onPress={onPress} >
                <Text style={[styles.signupButton, textStyle]}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    signupTextCont: {
        position: "absolute",
        bottom: 0,
        zIndex: -0,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },

    signupText: {
        marginRight: 5,
        fontSize: 16,
        color: 'rgba(255,255,255,0.6)',
    },

    signupButton: {
        fontSize: 16,
        fontWeight: '500',
        color: LIGHT_GREY,
    },
});
