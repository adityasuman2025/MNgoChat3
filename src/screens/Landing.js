import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
    GRADIENT_PURPLE_LIGHT,
    GRADIENT_PURPLE_DARK,
    GRADIENT_GREY_LIGHT,
    GRADIENT_GREY_DARK,
} from "../constants";

export default function Landing({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);

    //component rendering
    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            locations={[0, 0.5]}
            colors={[GRADIENT_PURPLE_LIGHT, GRADIENT_PURPLE_DARK]}
            style={styles.root}
        >
            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                locations={[0, 0.5]}
                colors={[GRADIENT_GREY_LIGHT, GRADIENT_GREY_DARK]}
                style={styles.container}
            >
                <Image source={require("../images/logo.png")} style={styles.logoImg} />
            </LinearGradient>

            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                locations={[0, 0.5]}
                colors={[GRADIENT_GREY_LIGHT, GRADIENT_GREY_DARK]}
                style={styles.containerSmall}
            />

            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                locations={[0, 0.5]}
                colors={[GRADIENT_GREY_LIGHT, GRADIENT_GREY_DARK]}
                style={styles.containerSmall2}
            />

            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                locations={[0, 0.5]}
                colors={[GRADIENT_GREY_LIGHT, GRADIENT_GREY_DARK]}
                style={styles.containerSmall3}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },

    container: {
        position: "absolute",
        top: -50,
        right: -50,
        width: 400,
        height: 400,
        borderRadius: 500,
        justifyContent: "center",
        alignItems: "center",
    },

    containerSmall: {
        position: "absolute",
        top: 250,
        left: 20,
        width: 200,
        height: 200,
        borderRadius: 500,
    },

    containerSmall2: {
        position: "absolute",
        top: 360,
        left: 130,
        width: 150,
        height: 150,
        borderRadius: 500,
    },

    containerSmall3: {
        position: "absolute",
        top: 460,
        left: 200,
        width: 100,
        height: 100,
        borderRadius: 500,
    },

    logoImg: {
        width: 200,
        height: 200,
    },
});
