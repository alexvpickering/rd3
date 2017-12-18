import axios from 'axios'

export const INVALIDATE_ABCS = 'INVALIDATE_ABCS'
export const REQUEST_ABCS = 'REQUEST_ABCS'
export const RECEIVE_ABCS = 'RECEIVE_ABCS'

// * synchronous action creators

export function invalidateAbcs() {
  return {
    type: INVALIDATE_ABCS
  }
}

export function requestAbcs() {
  return {
    type: REQUEST_ABCS
  }
}

export function receiveAbcs(abcs) {
  return {
    type: RECEIVE_ABCS,
    abcs
  }
}

// thunk: action creator that returns a function
export function fetchAbcs(endpoint) {
  return dispatch => {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestAbcs())

    return axios.post(endpoint)
      .then(
        // Second dispatch: update the app state with the results of the API call
        response => dispatch(receiveAbcs(response.data)),
        error => console.log('An error occured.', error)
      )
  }
}
