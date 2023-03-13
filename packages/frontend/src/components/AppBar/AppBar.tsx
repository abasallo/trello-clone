import React from 'react'

import logo from '../../images/logo.png'

import constants from '../../modules/constants'

import { Logo, MaterialUIStyledAppBar, Toolbar } from './AppBar.styled.components'

const AppBar = () => (
  <MaterialUIStyledAppBar position="static">
    <Toolbar>
      <Logo src={logo} alt={constants.LOGO_ALT} />
    </Toolbar>
  </MaterialUIStyledAppBar>
)

export default AppBar
