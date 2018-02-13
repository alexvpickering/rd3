import axios from "axios";

export const REQUEST_ABCS = "REQUEST_ABCS";
export const RECEIVE_ABCS = "RECEIVE_ABCS";
export const RECEIVE_WANIP = "RECEIVE_WANIP";

const WANIP_URL =
  "https://raw.githubusercontent.com/alexvpickering/rd3/master/src/utils/wanip.js";

export function requestAbcs() {
  return {
    type: REQUEST_ABCS
  };
}

export function receiveAbcs(abcs) {
  return {
    type: RECEIVE_ABCS,
    abcs
  };
}

export function receiveWANIP(wanip) {
  return {
    type: RECEIVE_WANIP,
    wanip
  };
}

// thunk: action creator that returns a function
export function fetchWANIP() {
  return dispatch => {
    return axios
      .get(WANIP_URL)
      .then(
        response => dispatch(receiveWANIP(response.data.replace(/\n/g, ""))),
        error => console.log("An error occured", error)
      );
  };
}

export function fetchAbcs(endpoint) {
  return dispatch => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestAbcs());

    return axios.post(endpoint).then(
      // Second dispatch: update the app state with the results of the API call
      response => dispatch(receiveAbcs(response.data)),
      error => console.log("An error occured.", error)
    );
  };
}
