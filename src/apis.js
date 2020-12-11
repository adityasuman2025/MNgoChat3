import axios from "axios";

import { AUTH_API_URL_ADDRESS, API_URL_ADDRESS } from "./constants";

export async function verifyUser(username, password) {
    try {
        const apiEndPoint = AUTH_API_URL_ADDRESS + "verify_user.php";
        const response = await axios.post(apiEndPoint, {
            username,
            password,
        });

        if (response) {
            const resp = response.data;
            return resp;
        }
    } catch (e) {
        return { msg: e, statusCode: 502 };
    }

    return { msg: "Something went wrong", statusCode: 500 };
};

export async function registerUser(username, name, email, password, passcode) {
    try {
        const apiEndPoint = AUTH_API_URL_ADDRESS + "register_user.php";
        const response = await axios.post(apiEndPoint, {
            username,
            name,
            email,
            password,
            passcode,
        });

        if (response) {
            const resp = response.data;
            return resp;
        }
    } catch (e) {
        return { msg: e, statusCode: 502 };
    }

    return { msg: "Something went wrong", statusCode: 500 };
};