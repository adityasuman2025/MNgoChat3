import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TextInput
} from 'react-native';

import ButtonLight from "../components/ButtonLight";
import PurpleGradientContainer from "../components/PurpleGradientContainer";

import {
    DARK_PURPLE,
    DARK_GREY,
    PROJECT_NAME,
} from "../constants";
import { globalStyles } from '../styles/globalStyles';

export default function Register({ navigation }) {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [passcode, setPasscode] = useState("");
    const [confPasscode, setConfPasscode] = useState("");

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
        <PurpleGradientContainer>
            <ScrollView style={styles.scroll}>
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
                        placeholder="Name"
                        placeholderTextColor={DARK_GREY}
                        selectionColor={DARK_PURPLE}
                        keyboardType="name-phone-pad"
                        autoCapitalize='words'
                        value={name}
                        onChangeText={(val) => setName(val)}
                    />

                    <TextInput style={globalStyles.formInputField}
                        placeholder="Email"
                        placeholderTextColor={DARK_GREY}
                        selectionColor={DARK_PURPLE}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(val) => setEmail(val)}
                    />

                    <TextInput style={globalStyles.formInputField}
                        placeholder="Password"
                        placeholderTextColor={DARK_GREY}
                        selectionColor={DARK_PURPLE}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(val) => setPassword(val)}
                    />

                    <TextInput style={globalStyles.formInputField}
                        placeholder="Confirm Password"
                        placeholderTextColor={DARK_GREY}
                        selectionColor={DARK_PURPLE}
                        secureTextEntry={true}
                        value={confPassword}
                        onChangeText={(val) => setConfPassword(val)}
                    />

                    <TextInput style={globalStyles.formInputField}
                        placeholder="Pass Code"
                        placeholderTextColor={DARK_GREY}
                        selectionColor={DARK_PURPLE}
                        secureTextEntry={true}
                        keyboardType="number-pad"
                        maxLength={4}
                        value={passcode}
                        onChangeText={(val) => setPasscode(val)}
                    />

                    <TextInput style={globalStyles.formInputField}
                        placeholder="Confirm Pass Code"
                        placeholderTextColor={DARK_GREY}
                        selectionColor={DARK_PURPLE}
                        secureTextEntry={true}
                        keyboardType="number-pad"
                        maxLength={4}
                        value={confPasscode}
                        onChangeText={(val) => setConfPasscode(val)}
                    />

                    <ButtonLight
                        buttonText="Register"
                        onPress={handleLoginPress}
                    />
                </View>
            </ScrollView>
        </PurpleGradientContainer>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        width: "100%",
    },

    container: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
});
