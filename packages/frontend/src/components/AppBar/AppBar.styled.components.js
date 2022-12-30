import styled from 'styled-components'

import MaterialUIAppBar from '@material-ui/core/AppBar'
import MaterialUIToolbar from '@material-ui/core/Toolbar'

import { customMUITheme as theme } from '../../customMUITheme'

export const MaterialUIStyledAppBar = styled(MaterialUIAppBar)`
  background-color: #ffffff;
  z-index: ${theme.zIndex.drawer + 1};
  margin-bottom: 40px;
`

export const Toolbar = styled(MaterialUIToolbar)`
  width: 100%;
  display: flex;
`

export const Logo = styled.img`
  max-width: 192px;
  width: 100%;
  height: auto;
  padding: 15px;
`

export const HeaderLoginButtons = styled.div`
  margin-left: auto;
  text-align: right;
`
