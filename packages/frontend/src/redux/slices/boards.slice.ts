import { createSlice } from '@reduxjs/toolkit'

import { Board } from 'trello-clone-shared/src/model/board.model'

import {
  addBoardAsyncThunk,
  deleteBoardAsyncThunk,
  fetchBoardsAsyncThunk,
  updateBoardAsyncThunk,
} from '../thunks/boards.thunks'

import {
  addBoardReducer,
  deleteBoardReducer,
  fetchBoardsReducer,
  updateBoardReducer,
} from '../reducers/boards.reducers'

const initialState: Board[] = []

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardsAsyncThunk.fulfilled, fetchBoardsReducer)
      .addCase(addBoardAsyncThunk.fulfilled, addBoardReducer)
      .addCase(updateBoardAsyncThunk.fulfilled, updateBoardReducer)
      .addCase(deleteBoardAsyncThunk.fulfilled, deleteBoardReducer)
  },
})

export default boardSlice.reducer
