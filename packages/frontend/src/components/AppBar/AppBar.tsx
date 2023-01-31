import React from 'react'

import Button from '@material-ui/core/Button'

import logo from '../../images/logo.png'

import constants from '../../utils/constants'

import {HeaderLoginButtons, Logo, MaterialUIStyledAppBar, Toolbar} from './AppBar.styled.components'

import {User} from 'trello-clone-shared/src/model/user.model'

const AppBar = (props: {
    user: User
}) => (
    <MaterialUIStyledAppBar position="static">
        <Toolbar>
            <Logo src={logo} alt={constants.LOGO_ALT}/>

            <HeaderLoginButtons>
                <Button>{props.user.email}</Button>
                <Button onClick={() => {
                }}>{constants.LOGOUT}</Button>
            </HeaderLoginButtons>
        </Toolbar>
    </MaterialUIStyledAppBar>
)

export default AppBar
