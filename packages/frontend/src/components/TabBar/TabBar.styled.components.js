import styled from 'styled-components'

import MaterialUIContainer from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { ChatBot as AmplifyChatBot } from 'aws-amplify-react'

export const Container = styled(MaterialUIContainer)`
  margin-top: 25px;
  text-align: center;
`

export const ChatBot = styled(AmplifyChatBot)`
  margin-bottom: 25px;
`

export const CopyrightBox = styled(Box)`
  margin-top: 25px;
  text-align: center;
`
