import styled from 'styled-components'

import { Card, CardActions, Fab, Grid } from '@material-ui/core'

import MaterialUIContainer from '@material-ui/core/Container'

export const Container = styled(MaterialUIContainer)`
  display: flex;
  flex-direction: column;
`

export const BoardsGrid = styled(Grid)`
  flex-grow: 1;
`
export const BoardComponent = styled(Card)`
  padding: 10px;
  margin: 10px;
  min-height: 100px;
  text-align: center;
  background-color: ${(props) => props.color || '#000000'};
`

export const BoardActions = styled(CardActions)`
  text-align: right;
`

export const AddButton = styled(Fab)`
  margin-left: auto;
  margin-top: 10px;
`
