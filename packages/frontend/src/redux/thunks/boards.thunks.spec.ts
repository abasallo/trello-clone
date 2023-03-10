import { addBoardAsyncThunk, deleteBoardAsyncThunk, fetchBoardsAsyncThunk, updateBoardAsyncThunk } from './boards.thunks'

describe('Board Thunks', () => {
  test('fetchBoardsAsyncThunk', () => {
    expect(fetchBoardsAsyncThunk).toBeDefined()
  })
  test('addBoardAsyncThunk', () => {
    expect(addBoardAsyncThunk).toBeDefined()
  })
  test('updateBoardAsyncThunk', () => {
    expect(updateBoardAsyncThunk).toBeDefined()
  })
  test('deleteBoardAsyncThunk', () => {
    expect(deleteBoardAsyncThunk).toBeDefined()
  })
})
