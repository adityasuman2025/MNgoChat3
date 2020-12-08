import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function Dashboard({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);

    //component rendering
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 0,
        paddingHorizontal: 30,
        justifyContent: "center",
    },

    animation: {
        width: "100%",
        backgroundColor: "#f1f1f1",
        marginBottom: 50,
    },

    title: {
        fontWeight: '500',
        fontSize: 30,
        letterSpacing: 0.1,
        textAlign: "center",
    },

    divider: {
        paddingVertical: 8,
    },

    loader: {
        marginTop: 10,
    },
});
