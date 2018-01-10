import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from './utils/theme'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home/Home.js'
import Example from './Articles/Example/Example.js'
import Archive from './Archive/Archive.js'


// Global style
// eslint-disable-next-line
injectGlobal`
body {
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
  line-height: 1.55;
  font-size: 17px;
}
`


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/article" component={Example}/>
          <Route exact path="/archive" component={Archive}/>
        </div>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
