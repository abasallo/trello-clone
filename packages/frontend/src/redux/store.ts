import {configureStore} from '@reduxjs/toolkit'

import userReducer from './slices/user.slice'
import boardsReducer from './slices/boards.slice'

import {fetchBoardsAsyncThunk} from './thunks/boards.thunks'

export const reducer =  {
    user: userReducer,
    boards: boardsReducer,
}

export const store = configureStore({reducer})

store.dispatch(fetchBoardsAsyncThunk())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
