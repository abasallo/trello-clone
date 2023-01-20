import { createSlice } from '@reduxjs/toolkit'

interface User {
    names: string
    surnames: string
    email: string
}

const initialState: User = {
    names: 'Álvaro',
    surnames: 'Basallo Martínez',
    email: 'alvaro@basallo.es'
}

const boardSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export const {} = boardSlice.actions

export default boardSlice.reducer
