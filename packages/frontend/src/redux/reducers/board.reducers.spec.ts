import { PayloadAction } from '@reduxjs/toolkit'

import {
  addBoardReducer,
  deleteBoardReducer,
  fetchBoardsReducer,
  updateBoardReducer,
} from './boards.reducers'

import { Board } from 'trello-clone-shared/src/model/board.model'

const testBoard: Board = { id: 1, name: 'name' }

describe('Board Reducers', () => {
  test('fetchBoardsReducer', () => {
    const action = { payload: [testBoard] } as PayloadAction<Board[]>
    expect(fetchBoardsReducer([], action)).toEqual([testBoard])
  })

  test('addBoardReducer', () => {
    const state: Board[] = []
    const action = { payload: testBoard } as PayloadAction<Board>
    addBoardReducer(state, action)
    expect(state[0].name).toEqual('name')
  })

  test('updateBoardReducer', () => {
    const state: Board[] = [{ id: 1, name: 'name' }]
    const action = { payload: { id: 1, name: 'modifiedName' } } as PayloadAction<Board>
    updateBoardReducer(state, action)
    expect(state[0].name).toEqual('modifiedName')
  })

  test('updateBoardReducer - wrong ID', () => {
    const state: Board[] = [{ id: 1, name: 'name' }]
    const action = { payload: { id: 2, name: 'modifiedName' } } as PayloadAction<Board>
    updateBoardReducer(state, action)
    expect(state[0].name).toEqual('name')
  })

  test('updateBoardReducer - no payload', () => {
    const state: Board[] = [{ id: 1, name: 'name' }]
    const action = {} as PayloadAction<Board>
    updateBoardReducer(state, action)
    expect(state[0].name).toEqual('name')
  })

  test('deleteBoardReducer', () => {
    const state: Board[] = [{ id: 1, name: 'name' }]
    const action = { payload: 1 } as PayloadAction<number>
    deleteBoardReducer(state, action)
    expect(state.length).toEqual(0)
  })

  test('deleteBoardReducer - wrong ID', () => {
    const state: Board[] = [{ id: 1, name: 'name' }]
    const action = { payload: 2 } as PayloadAction<number>
    deleteBoardReducer(state, action)
    expect(state.length).toEqual(1)
  })

  test('deleteBoardReducer - no payload', () => {
    const state: Board[] = [{ id: 1, name: 'name' }]
    const action = {} as PayloadAction<number>
    deleteBoardReducer(state, action)
    expect(state.length).toEqual(1)
  })
})
