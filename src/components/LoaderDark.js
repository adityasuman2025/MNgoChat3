import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { DARK_PURPLE } from "../constants";

export default function LoaderDark({
    customStyle,
    loaderSize,
}) {
    return (
        <View style={[styles.container, customStyle]}>
            <ActivityIndicator size={loaderSize || "large"} color={DARK_PURPLE} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
