import { REQUEST_ABCS, RECEIVE_ABCS } from './actions'

// state outline
/*
{
  didInvalidate: false,
  isFetching: true,
  items: []
}
*/


// single reducer
export default function abcs(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_ABCS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_ABCS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.abcs
      })
    default:
      return state
  }
}
