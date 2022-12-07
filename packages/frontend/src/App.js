import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo'
import { apolloClient } from './services/graphql/apolloClient'

import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { customMUITheme } from './customMUITheme'

import Home from './views/home/Home'

import constants from './utils/constants'

const App = () => (
  <ApolloProvider client={apolloClient}>
    <MuiThemeProvider theme={customMUITheme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path={constants.PATH_ROOT}>
              <Home />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </MuiThemeProvider>
  </ApolloProvider>
)

export default App
