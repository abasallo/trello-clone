import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import { Chip, Grid, IconButton, TextField } from '@material-ui/core'

import {
  AddButton,
  BoardComponent,
  BoardActions,
  BoardsGrid,
  Container,
} from './Boards.styled.components'

import { AppDispatch } from '../../redux/store'

import {
  addBoardAsyncThunk,
  deleteBoardAsyncThunk,
  updateBoardAsyncThunk,
} from '../../redux/thunks/boards.thunks'

import { Board } from 'trello-clone-shared/src/model/board.model'
import { selectBoards } from '../../redux/slices/boards.slice'

const addButtonOnClick = (dispatch: AppDispatch): void => {
  dispatch(addBoardAsyncThunk())
}
const updateButtonOnClick = (dispatch: AppDispatch, board: Board): void => {
  dispatch(updateBoardAsyncThunk(board))
}

const deleteButtonOnClick = (dispatch: AppDispatch, id?: number): void => {
  if (id) dispatch(deleteBoardAsyncThunk(id))
}

const Boards = () => {
  const [editMode, setEditMode] = useState(false)

  const dispatch: AppDispatch = useDispatch()

  const boards: Board[] = useSelector(selectBoards)

  const conditionalRender = (editMode: boolean, board: Board) => {
    if (editMode) {
      return (
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          defaultValue={board.name}
          onBlur={(e) => {
            updateButtonOnClick(dispatch, {
              id: board.id,
              name: e.target.value,
            })
            setEditMode(false)
          }}
        />
      )
    } else {
      return <Chip label={board.name} variant="outlined" onClick={() => setEditMode(true)} />
    }
  }

  return (
    <Container>
      <BoardsGrid container spacing={2}>
        {boards.map((board) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={board.id}>
            <BoardComponent color={board.colour}>
              {conditionalRender(editMode, board)}
              <BoardActions disableSpacing>
                <IconButton aria-label="edit" onClick={() => setEditMode(true)}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteButtonOnClick(dispatch, board.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </BoardActions>
            </BoardComponent>
          </Grid>
        ))}
      </BoardsGrid>
      <AddButton
        size="medium"
        color="secondary"
        aria-label="add"
        onClick={() => addButtonOnClick(dispatch)}
      >
        <AddIcon />
      </AddButton>
    </Container>
  )
}

export default Boards
