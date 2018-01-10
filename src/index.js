import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from './utils/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './routes/Home/Home'
import Example from './routes/Articles/Example/Example'
import Archive from './routes/Archive/Archive'


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
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/article" component={Example}/>
          <Route exact path="/archive" component={Archive}/>
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>,

  document.getElementById('root')
)
