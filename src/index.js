import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from './utils/theme.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './views/Home'
import Article from './views/Article'


// Global style
// eslint-disable-next-line
injectGlobal`
body {
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
  line-height: 1.5;
}
`


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/article" component={Article}/>
        </div>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
