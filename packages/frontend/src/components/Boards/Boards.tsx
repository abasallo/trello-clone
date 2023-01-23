import React, {useState} from 'react'

import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import {Grid, IconButton, TextField, Chip} from '@material-ui/core'

import {AddButton, Board, BoardActions, BoardsGrid, Container} from './Boards.styled.components'

import {useAppDispatch, useAppSelector} from '../../redux/hooks'
import {AppDispatch} from '../../redux/store'
import {addBoardAsyncThunk, deleteBoardAsyncThunk, updateBoardAsyncThunk} from "../../redux/slices/boardsSlice";

const addButtonOnClick = (dispatch: AppDispatch): void => {
    dispatch(addBoardAsyncThunk())
}
const updateButtonOnClick = (dispatch: AppDispatch, board: { id: number; name: string }): void => {
    dispatch(updateBoardAsyncThunk(board))
}

const deleteButtonOnClick = (dispatch: AppDispatch, id: number): void => {
    dispatch(deleteBoardAsyncThunk(id))
}

const Boards = () => {

    const [editMode, setEditMode] = useState(false);

    const state = useAppSelector(state => state)
    const dispatch: AppDispatch = useAppDispatch();

    return (
        <Container>
            <BoardsGrid container spacing={2}>
                {state.boards.map((board) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={board.id}>
                        <Board>
                            {
                                editMode
                                    ? <TextField id="standard-basic" label="Standard" variant="standard"
                                                 defaultValue={board.name}
                                                 onBlur={(e) => {
                                                     updateButtonOnClick(dispatch, {
                                                         id: board.id,
                                                         name: e.target.value
                                                     })
                                                     setEditMode(false)
                                                 }}
                                    />
                                    : <Chip label={board.name} variant="outlined" onClick={() => setEditMode(true)} />
                            }

                            <BoardActions disableSpacing>
                                <IconButton aria-label="edit" onClick={() => setEditMode(true)}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => deleteButtonOnClick(dispatch, board.id)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </BoardActions>
                        </Board>
                    </Grid>
                ))}
            </BoardsGrid>
            <AddButton size="medium" color="secondary" aria-label="add" onClick={() => addButtonOnClick(dispatch)}>
                <AddIcon/>
            </AddButton>
        </Container>
    )
}

// TODO - Replace propTypes with proper typing
Boards.propTypes = {
    boards: Object
}

export default Boards
