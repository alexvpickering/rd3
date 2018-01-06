import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { injectGlobal, ThemeProvider } from 'styled-components';
import Home from './pages/Home'
import theme from './utils/theme.js'



 // Global style
// eslint-disable-next-line
injectGlobal`
  body {
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0;
  }
`


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
