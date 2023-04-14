import { PayloadAction } from '@reduxjs/toolkit'

import { Board } from 'trello-clone-shared/src/model/board.model'

export const fetchBoardsReducer = (state: Board[], action: PayloadAction<Board[] | undefined>) => {
  return action.payload
}

export const addBoardReducer = (state: Board[], action: PayloadAction<Board | undefined>) => {
  if (action.payload) {
    state.push(action.payload)
  }
}

export const updateBoardReducer = (state: Board[], action: PayloadAction<Board | undefined>) => {
  if (action.payload) {
    const index = state.findIndex(({ id }) => id === action?.payload?.id)
    if (index !== -1) {
      state.splice(index, 1)
      state.push(action.payload)
    }
  }
}

export const deleteBoardReducer = (state: Board[], action: PayloadAction<number>) => {
  const index = state.findIndex(({ id }) => {
    return id === action.payload
  })
  if (index !== -1) {
    state.splice(index, 1)
  }
}
