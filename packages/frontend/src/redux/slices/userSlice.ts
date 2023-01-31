import {createSlice} from '@reduxjs/toolkit'

import {User} from 'trello-clone-shared/src/model/user.model'

// TODO:: Replace this by actually going to the backend
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
