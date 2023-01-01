import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
          <Routes>
            <Route path={constants.PATH_ROOT} element={<Home />} />
          </Routes>
        </Router>
      </StylesProvider>
    </MuiThemeProvider>
  </ApolloProvider>
)

export default App
