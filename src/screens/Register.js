import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
import SnackBar from "../components/SnackBar";

import {
    resetRegisterInfoAction,
    registerUserAction
} from "../actions/index";
import {
    validateUsername,
    validateName,
    validateEmail,
} from "../utils";

import {
    DARK_PURPLE,
    DARK_GREY,
    PROJECT_NAME,
} from "../constants";
import { globalStyles } from '../styles/globalStyles';

function Register({
    registerInfo,
    navigation,
    dispatch,
}) {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [passcode, setPasscode] = useState("");
    const [confPasscode, setConfPasscode] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [snackBarVisible, setSnackBarVisible] = useState(false);
    const [snackBarText, setSnackBarText] = useState("");
    const [snackBarType, setSnackBarType] = useState("");

    //componentDidMount && componentWillUnmount
    useEffect(() => {
        //resetting registerInfo reducer on mount and unmount
        dispatch && dispatch(resetRegisterInfoAction());

        return () => {
            dispatch && dispatch(resetRegisterInfoAction());
        }
    }, []);

    //when any change in reducer state variable "registerInfo" takes place
    useEffect(() => {
        if (Object.keys(registerInfo).length > 0) {
            const { statusCode, msg, data } = registerInfo;
            if (statusCode === 200) {
                displaySnackBar("success", msg);
            } else {
                displaySnackBar("error", msg);
            }
            setIsLoading(false);
        }
    }, [registerInfo]);

    //function to handle when login btn is pressed
    function handleRegisterPress() {
        if (username !== "" && name !== "" && email !== "" && password !== "" && confPassword !== "" && passcode !== "" && confPasscode !== "") {
            if (!validateUsername(username)) {
                displaySnackBar("error", "Username cannot contain symbol and spaces");
                return;
            }
            if (!validateName(name)) {
                displaySnackBar("error", "Name cannot contain symbol and spaces");
                return;
            }
            if (!validateEmail(email)) {
                displaySnackBar("error", "Invalid Email id format");
                return;
            }
            if (password !== confPassword) {
                displaySnackBar("error", "Password do not match");
                return;
            }
            if (passcode.length !== 4) {
                displaySnackBar("error", "Pass code must be 4 digits long");
                return;
            }
            if (passcode !== confPasscode) {
                displaySnackBar("error", "Passcode do not match");
                return;
            }

            //all is good
            setIsLoading(true);
            dispatch && dispatch(registerUserAction(username, name, email, password, passcode));
        } else {
            displaySnackBar("error", "Please fill all the input fields");
        }
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
                            showLoader={isLoading}
                            buttonText="Register"
                            onPress={handleRegisterPress}
                        />
                    </View>
                </ScrollView>
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


const mapStateToProps = (state) => {
    return {
        registerInfo: state.registerInfo,
    }
}

export default connect(mapStateToProps, undefined)(Register);