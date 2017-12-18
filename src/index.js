/* eslint-disable */

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { invalidateAbcs, requestAbcs, receiveAbcs, fetchAbcs } from './actions'
import abcs from './reducers'

const endpoint = 'http://localhost:5656/ocpu/library/rd3server/R/get_skills/json'

const store = createStore(
  abcs,               // reducer
  applyMiddleware(
    thunkMiddleware  // lets us dispatch() functions
  )
)


store
  .dispatch(fetchAbcs(endpoint))
  .then(() => console.log(store.getState()))
