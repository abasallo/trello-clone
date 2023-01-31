import {configureStore} from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import boardsReducer, {fetchBoardsAsyncThunk} from './slices/boardsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        boards: boardsReducer,
    }
})

store.dispatch(fetchBoardsAsyncThunk())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
