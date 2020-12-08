import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
    EXTRA_DARK_GREY,
} from "../constants";

export default function SnackBar({
    isVisible,
    timeout = 5000,
    text,
    type,
    boxStyle,
    textStyle,
    onClose,
}) {
    // component did mount
    useEffect(() => {
        setTimeout(function() {
            console.log("hiding snack bar in 5 s");
            onClose();
        }, timeout);
    }, [])

    //function to render different types of snackbar
    function renderTypeStyle(type) {
        if (type === "error") {
            return styles.errorBox;
        } else if (type === "success") {
            return styles.successBox;
        } else if (type === "info") {
            return styles.infoBox;
        }

        return "";
    }

    //component rendering
    return (
        isVisible ?
            <View style={styles.container} >
                <View style={[styles.content, renderTypeStyle(type), boxStyle]}>
                    <Text style={[styles.text, textStyle]}>{text}</Text>
                </View>
            </View>
            : null
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },

    content: {
        width: "80%",
        borderRadius: 1000,
        shadowColor: 'grey',
        shadowOpacity: .8,
        shadowOffset: { width: 0, height: 1 },
        elevation: 10,
        paddingVertical: 7,
        backgroundColor: EXTRA_DARK_GREY,
    },

    text: {
        textAlign: "center",
        fontSize: 15,
        color: '#f1f1f1',
    },

    errorBox: {
        backgroundColor: "#da0b0b",
    },

    successBox: {
        backgroundColor: "#00cc00",
    },

    infoBox: {
        backgroundColor: "#00ace6",
    }
});
