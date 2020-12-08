import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
    GRADIENT_PURPLE_LIGHT,
    GRADIENT_PURPLE_DARK,
    GRADIENT_GREY_LIGHT,
    GRADIENT_GREY_DARK,
} from "../constants";

export default function Login({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);

    //component rendering
    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            locations={[0, 0.5]}
            colors={[GRADIENT_PURPLE_LIGHT, GRADIENT_PURPLE_DARK]}
            style={styles.root}
        >
            <Text style={styles.title}>login</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 15,
    },

    title: {
        fontWeight: '500',
        fontSize: 30,
        letterSpacing: 0.1,
        textAlign: "center",
    },
});
