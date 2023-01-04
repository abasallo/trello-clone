import React from 'react'

import PropTypes from 'prop-types'

import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import {Grid, IconButton} from '@material-ui/core'

import {AddButton, Board, BoardActions, BoardsGrid, Container} from './Boards.styled.components'

import { addBoard, deleteBoard } from '../../redux/slices/boardsSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { AppDispatch } from '../../redux/store'

const addButtonOnClick = (dispatch: AppDispatch): void => {
    dispatch(addBoard())
}

const deleteButtonOnClick = (dispatch: AppDispatch, id: number): void => {
    dispatch(deleteBoard(id))
}

const Boards = () => {

  const state = useAppSelector(state => state)
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <Container>
      <BoardsGrid container spacing={2}>
        {state.boards.map((board) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={board.id}>
            <Board>
                {board.name}
                <BoardActions disableSpacing>
                    <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => deleteButtonOnClick(dispatch, board.id)}>
                        <DeleteIcon />
                    </IconButton>
                </BoardActions>
            </Board>
          </Grid>
        ))}
      </BoardsGrid>
      <AddButton size="medium" color="secondary" aria-label="add" onClick={() => addButtonOnClick(dispatch)}>
        <AddIcon />
      </AddButton>
    </Container>
  )
}

// TODO - Replace propTypes with proper typing
Boards.propTypes = {
  boards: PropTypes.array
}

export default Boards
