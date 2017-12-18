import { REQUEST_ABCS, RECEIVE_ABCS, INVALIDATE_ABCS } from './actions'

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
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_ABCS:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_ABCS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_ABCS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.abcs
      })
    default:
      return state
  }
}
