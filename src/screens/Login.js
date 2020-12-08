import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
    GRADIENT_PURPLE_LIGHT,
    GRADIENT_PURPLE_DARK,
    DARK_PURPLE,
    DARK_GREY,
    PROJECT_NAME,
} from "../constants";
import { globalStyles } from '../styles/globalStyles';

import ButtonLight from "../components/ButtonLight";
import SignInUpButton from "../components/SignInUpButton";

export default function Login({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //function to handle when login btn is pressed
    function handleLoginPress() {
        console.log("login pressed");
    }

    //function to handle when signup btn is pressed
    function handleSignupPressed() {
        console.log("signup pressed");
    }

    //component rendering
    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            locations={[0, 0.5]}
            colors={[GRADIENT_PURPLE_LIGHT, GRADIENT_PURPLE_DARK]}
            style={globalStyles.root}
        >
            <View style={styles.container}>
                <Image source={require("../images/logo.png")} style={globalStyles.logoImg} />
                <Text style={globalStyles.logoTitle}>{PROJECT_NAME}</Text>

                <TextInput style={globalStyles.formInputField}
                    placeholder="Username"
                    placeholderTextColor={DARK_GREY}
                    selectionColor={DARK_PURPLE}
                    keyboardType="visible-password"
                    autoFocus
                    value={username}
                    onChangeText={(val) => setUsername(val)}
                />

                <TextInput style={globalStyles.formInputField}
                    placeholder="Password"
                    placeholderTextColor={DARK_GREY}
                    selectionColor={DARK_PURPLE}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                />

                <ButtonLight
                    buttonText="Login"
                    onPress={handleLoginPress}
                />

            </View>

            <SignInUpButton
                otherText="Don't have an account yet?"
                buttonText="Signup"
                onPress={handleSignupPressed}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
});
