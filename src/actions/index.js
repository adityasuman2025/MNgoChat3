import axios from "axios";

import { API_URL_ADDRESS } from "../constants";

export const fetchProductsAction = (baseAPI_EndPoint) => async (dispatch) => {
    let toSend = {};
    toSend["error"] = 1;
    toSend["data"] = [];

    //sending rqst to api
    try {
        const request_address = api_url_address + baseAPI_EndPoint;
        const response = await axios.get(request_address);

        //getting resp from sent rqst
        if (response) {
            const resp = await response.data;

            const results = resp.results;
            if (results) {
                const total_items = resp.count;

                toSend["error"] = 0;
                toSend["data"] = resp.results;
                toSend["total_items"] = total_items;

                dispatch({ type: 'GET_PRODUCTS', payload: toSend });
            } else {
                dispatch({ type: 'GET_PRODUCTS', payload: toSend });
            }
        } else {
            dispatch({ type: 'GET_PRODUCTS', payload: toSend });
        }
    } catch {
        dispatch({ type: 'GET_PRODUCTS', payload: toSend });
    }
}