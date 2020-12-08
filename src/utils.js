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