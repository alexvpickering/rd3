// * synchronous action creators

export const REQUEST_ABCS = 'REQUEST_ABCS'
export function requestAbcs() {
  return {
    type: REQUEST_ABCS
  }
}

export const RECEIVE_ABCS = 'RECEIVE_ABCS'
export function receiveAbcs(json) {
  // fill in later
}

export function fetchAbcs() {
  return async dispatch => {
    let response = await fetch(API_ENDPOINT)
    let data = await response.json();

    console.log(data)
  }
}
