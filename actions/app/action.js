import {
  LISTING_FAILURE,
  LISTING_REQUEST,
  LISTING_SUCCESS
} from "./actionType";

export function failurePersonioApi(error) {
  return {
    type: LISTING_FAILURE,
    error
  };
}

export function requestPersonioApi() {
  return {
    type: LISTING_REQUEST
  };
}

export function receivePersonioApi(authResponse) {
  return {
    type: LISTING_SUCCESS,
    listingInfo: authResponse
  };
}
