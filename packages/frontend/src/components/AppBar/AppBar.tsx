import React from 'react'

import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

import logo from '../../images/logo.png'

import constants from '../../utils/constants'

import { MaterialUIStyledAppBar, Toolbar, Logo, HeaderLoginButtons } from './AppBar.styled.components'

// TODO - Replace propTypes with proper typing
// @ts-ignore
const AppBar = (props) => (
  <MaterialUIStyledAppBar position="static">
    <Toolbar>
      <Logo src={logo} alt={constants.LOGO_ALT} />

      <HeaderLoginButtons>
        <Button>{props.user.email}</Button>
        <Button onClick={() => {}}>{constants.LOGOUT}</Button>
      </HeaderLoginButtons>
    </Toolbar>
  </MaterialUIStyledAppBar>
)

AppBar.propTypes = {
  user: PropTypes.object
}

export default AppBar
