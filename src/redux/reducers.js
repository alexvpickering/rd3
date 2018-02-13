import { REQUEST_ABCS, RECEIVE_ABCS, RECEIVE_WANIP } from "./actions";

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
    items: ["a", "b", "c"],
    wanip: null
  },
  action
) {
  switch (action.type) {
    case REQUEST_ABCS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ABCS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.abcs
      });
    case RECEIVE_WANIP:
      return Object.assign({}, state, {
        wanip: action.wanip
      });
    default:
      return state;
  }
}
