import { createSlice } from '@reduxjs/toolkit'

interface Board {
    id: number
    name: string
}

type BoardState = Board[]

const initialState: BoardState = [
    {
        id: 1,
        name: 'Board 1'
    },
    {
        id: 2,
        name: 'Board 2'
    },
    {
        id: 3,
        name: 'Board 3'
    },
    {
        id: 4,
        name: 'Board 4'
    },
    {
        id: 5,
        name: 'Board 5'
    },
    {
        id: 6,
        name: 'Board 6'
    }
]

export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard: (state) => {
            state.push({
                id: state.length + 1,
                name: `Board ${state.length + 1}`
            })
            return state
        },
        deleteBoard: (state, action) => {
            const id = action.payload
            return state.filter((board) => board.id !== id)
        }
    }
})

export const { addBoard, deleteBoard } = boardSlice.actions

export default boardSlice.reducer
