import React from 'react'

import PropTypes from 'prop-types'

import AddIcon from '@mui/icons-material/Add'

import { Grid } from '@material-ui/core'

import { AddButton, Board, BoardsGrid, Container } from './Boards.styled.components'

const Boards = (props) => {
  return (
    <Container>
      <BoardsGrid container spacing={2}>
        {props.boards.map((board) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={board.id}>
            <Board>{board.name}</Board>
          </Grid>
        ))}
      </BoardsGrid>
      <AddButton size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </AddButton>
    </Container>
  )
}

Boards.propTypes = {
  boards: PropTypes.object
}

export default Boards
