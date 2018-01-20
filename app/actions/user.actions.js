import axios from "axios";
import { Config } from "../config";

const uri = "users";

export function fetchUser(username) {
    return function (dispatch) {
        dispatch({ type: "FETCH_USER_PENDING" });

        axios.get(`${Config.apiUrl()}${uri}/${username}`)
            .then((response) => {
                dispatch({ type: "FETCH_USER_FULFILLED", payload: response.data });
            })
            .catch((error) => {
                dispatch({ type: "FETCH_USER_REJECTED", payload: error });
            });
    }
}