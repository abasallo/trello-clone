import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {addBoard, deleteBoard, getBoards, updateBoard} from '../../services/Board'

// TODO:: Refactor extract / move for the types
interface Board {
    id: number
    name: string
}

const initialState: Board[] = []

export const fetchBoardsAsyncThunk = createAsyncThunk(
    "boards/fetch",
    async () => await getBoards()
)

// TODO:: Type this
export const addBoardAsyncThunk = createAsyncThunk(
    "boards/add",
    async () => await addBoard()
)

export const updateBoardAsyncThunk = createAsyncThunk(
    "boards/update",
    async (board: { id: number; name: string }) => await updateBoard(board)
)

export const deleteBoardAsyncThunk = createAsyncThunk(
    "board/delete",
    async (id: number) => {
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






