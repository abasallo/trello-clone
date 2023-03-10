import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { customMUITheme } from './customMUITheme'

import Home from './views/home/Home'

import constants from './utils/constants'

const App = () => (
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
)

export default App
