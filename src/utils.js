import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from "react-native-crypto-js";

import { ENCRYPTION_KEY } from "./constants";

//function to get a async storage value, decrypt it and return the real value
export async function getDecryptedAsyncStorageValue(name) {
    let value = null;
    try {
        const enryptedValue = await AsyncStorage.getItem(name);
        if (enryptedValue !== null) {
            const decrypted = CryptoJS.AES.decrypt(enryptedValue, ENCRYPTION_KEY);
            value = CryptoJS.enc.Utf8.stringify(decrypted);
        }
    } catch {
        value = null;
    }

    return value;
};

//function to set async storage after encrypting the value
export async function makeEncryptedCookie(key, value) {
    try {
        const encryptedValue = CryptoJS.AES.encrypt(value, ENCRYPTION_KEY).toString();
        await AsyncStorage.setItem(key, encryptedValue);

        return true;
    } catch {
        return false;
    }
};

//function to validate name, contact no and email
export function validateUsername(username) {
    var re = /^[a-zA-Z0-9_]*$/;
    return re.test(username);
};

//function to validate name, contact no and email
export function validateName(name) {
    var re = /^[a-zA-Z0-9 ]*$/;
    return re.test(name);
};

export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export function validateNumber(number) {
    var re = /^[0-9]*$/;
    return re.test(number);
};
