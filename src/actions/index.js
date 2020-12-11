import {
    verifyUser,
} from "../apis";

export const loginUserAction = (username, password) => async (dispatch) => {
    try {
        const response = await verifyUser(username, password);
        dispatch({ type: 'LOGIN_USER', payload: response });
    } catch {
        dispatch({ type: 'LOGIN_USER', payload: { statusCode: 500, msg: "Something went wrong" } });
    }
}