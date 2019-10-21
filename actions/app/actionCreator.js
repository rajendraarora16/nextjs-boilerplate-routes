import axios from "axios";
import * as action from "./action";
import { API_ENDPOINT_URL } from "../../global.config";

/**
 * @function initiatePersonioApi
 * @description Will initiate personio api listing from endpoint to store in global state.
 */
export function initiatePersonioApi() {
  return dispatch => {
    dispatch(action.requestPersonioApi());
    return axios.get(API_ENDPOINT_URL).then(
      json => {
        if (json.status === 200 && json.data && !json.data.error) {
          dispatch(action.receivePersonioApi(json.data));
        } else {
          dispatch(action.failurePersonioApi(json.data.error));
        }
      },
      err => {
        dispatch(action.failurePersonioApi(err));
      }
    );
  };
}
