import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import abcs from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
    abcs,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
)

  export default store
