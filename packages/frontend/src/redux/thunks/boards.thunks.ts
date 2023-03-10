import { createAsyncThunk } from '@reduxjs/toolkit'
import { Board } from 'trello-clone-shared/src/model/board.model'
import { addBoard, deleteBoard, getBoards, updateBoard } from '../../services/Board'

export const fetchBoardsAsyncThunk = createAsyncThunk('boards/fetch', async (): Promise<Board[] | undefined> => await getBoards())

export const addBoardAsyncThunk = createAsyncThunk('boards/add', async (): Promise<Board | undefined> => await addBoard())

export const updateBoardAsyncThunk = createAsyncThunk(
  'boards/update',
  async (board: Board): Promise<Board | undefined> => await updateBoard(board)
)

export const deleteBoardAsyncThunk = createAsyncThunk('board/delete', async (id: number): Promise<number> => {
  await deleteBoard(id)
  return id
})
