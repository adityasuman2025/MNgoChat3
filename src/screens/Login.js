import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import ButtonLight from "../components/ButtonLight";
import SignInUpButton from "../components/SignInUpButton";
import SnackBar from "../components/SnackBar";
import PurpleGradientContainer from "../components/PurpleGradientContainer";

import {
    loginUserAction
} from "../actions/index";

import {
    DARK_PURPLE,
    DARK_GREY,
    PROJECT_NAME,
} from "../constants";
import { globalStyles } from '../styles/globalStyles';

function Login({
    loginInfo,
    navigation,
    dispatch,
}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [snackBarVisible, setSnackBarVisible] = useState(false);
    const [snackBarText, setSnackBarText] = useState("");
    const [snackBarType, setSnackBarType] = useState("");

    useEffect(() => {
        if (Object.keys(loginInfo).length > 0) {
            const { statusCode, msg, data } = loginInfo;
            if (statusCode === 200) {
                displaySnackBar("success", msg);
            } else {
                displaySnackBar("error", msg);
            }
            setIsLoading(false);
        }
    }, [loginInfo]);

    //function to handle when login btn is pressed
    function handleLoginPress() {
        if (username !== "" && password !== "") {
            setIsLoading(true);
            dispatch && dispatch(loginUserAction(username, password));
        } else {
            displaySnackBar("error", "Please fill all the input fields");
        }
    }

    //function to handle when signup btn is pressed
    function handleSignupPressed() {
        //redirecting to register screen
        navigation.navigate("Register");
    }

    //function to display snackbar
    function displaySnackBar(type, text) {
        setSnackBarType(type);
        setSnackBarText(text);
        setSnackBarVisible(true);
    }

    //function to hide snackbar
    function hideSnackBar() {
        setSnackBarVisible(false);
    }

    //component rendering
    return (
        <>
            <PurpleGradientContainer>
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
                        showLoader={isLoading}
                        buttonText="Login"
                        onPress={handleLoginPress}
                    />
                </View>

                <SignInUpButton
                    otherText="Don't have an account yet?"
                    buttonText="Signup"
                    onPress={handleSignupPressed}
                />
            </PurpleGradientContainer>

            {
                snackBarVisible ?
                    <SnackBar
                        isVisible={snackBarVisible}
                        text={snackBarText}
                        type={snackBarType}
                        onClose={hideSnackBar}
                    />
                    : null
            }
        </>
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


const mapStateToProps = (state) => {
    return {
        loginInfo: state.loginInfo,
    }
}

export default connect(mapStateToProps, undefined)(Login);