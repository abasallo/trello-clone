import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {addBoard, deleteBoard, getBoards, updateBoard} from '../../services/Board'

import {Board} from 'trello-clone-shared/src/model/board.model'

const initialState: Board[] = []

export const fetchBoardsAsyncThunk = createAsyncThunk(
    "boards/fetch",
    async (): Promise<Board | undefined> => await getBoards()
)

export const addBoardAsyncThunk = createAsyncThunk(
    "boards/add",
    async (): Promise<Board | undefined> => await addBoard()
)

export const updateBoardAsyncThunk = createAsyncThunk(
    "boards/update",
    async (board: Board): Promise<Board | undefined> => await updateBoard(board)
)

export const deleteBoardAsyncThunk = createAsyncThunk(
    "board/delete",
    async (id: number): Promise<number> => {
        await deleteBoard(id)
        return id
    }
)

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBoardsAsyncThunk.fulfilled.type]: (state, action) => {
            return [...action.payload]
        },
        [addBoardAsyncThunk.fulfilled.type]: (state, action) => {
            state.push(action.payload)
        },
        [updateBoardAsyncThunk.fulfilled.type]: (state, action) => {
            let index = state.findIndex(({id}) => {
                return id === action.payload.id
            })
            state.splice(index, 1)
            state.push(action.payload)
        },
        [deleteBoardAsyncThunk.fulfilled.type]: (state, action) => {
            let index = state.findIndex(({id}) => {
                return id === action.payload
            })
            state.splice(index, 1)
        },
    }
})

export default boardSlice.reducer






