import {
    verifyUser,
    registerUser,
} from "../apis";

export const loginUserAction = (username, password) => async (dispatch) => {
    try {
        const response = await verifyUser(username, password);
        dispatch({ type: 'LOGIN_USER', payload: response });
    } catch {
        dispatch({ type: 'LOGIN_USER', payload: { statusCode: 500, msg: "Something went wrong" } });
    }
}

export const registerUserAction = (username, name, email, password, confPassword, passcode, confPasscode) => async (dispatch) => {
    try {
        const response = await registerUser(username, name, email, password, confPassword, passcode, confPasscode);
        dispatch({ type: 'REGISTER_USER', payload: response });
    } catch {
        dispatch({ type: 'REGISTER_USER', payload: { statusCode: 500, msg: "Something went wrong" } });
    }
}