import styled from 'styled-components'

import MaterialUIContainer from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

export const Container = styled(MaterialUIContainer)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export const Contents = styled(MaterialUIContainer)`
  flex-grow: 1;
`

export const CopyrightBox = styled(Box)`
  flex: none;
  padding: 10px;
`
