import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'
import { fetchAbcs, ABC_ENDPOINT } from './actions'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
 )

// initial fetch of letters
store.dispatch(fetchAbcs(ABC_ENDPOINT))
