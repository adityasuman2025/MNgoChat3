import axios from "axios";

import { AUTH_API_URL_ADDRESS, API_URL_ADDRESS } from "./constants";

export async function verifyUser(username, password) {
    //sending rqst to api
    try {
        const apiEndPoint = AUTH_API_URL_ADDRESS + "verify_user.php";
        const response = await axios.post(apiEndPoint, {
            username,
            password,
        });

        // getting resp from sent rqst
        if (response) {
            const resp = response.data;
            return resp;
        }
    } catch (e) {
        return { msg: e, statusCode: 502 };
    }
};