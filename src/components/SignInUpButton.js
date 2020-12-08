import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

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
        justifyContent: 'center',
        marginVertical: 20,
        flexDirection: 'row'
    },

    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
        marginRight: 5,
    },

    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
});
