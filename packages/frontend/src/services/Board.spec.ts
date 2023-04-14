import { addBoard, deleteBoard, getBoards, updateBoard } from './Board'

import { Board } from 'trello-clone-shared/src/model/board.model'

import { DELETE_BOARD, GET_BOARDS, UPDATE_BOARD } from './graphql/UserQueries'

import { apolloClient } from './graphql/apolloClient'

jest.mock('./graphql/apolloClient')
jest.mock('./Colour', () => ({ fetchRandomColour: () => '#000000' }))

describe('Boards Service', () => {
  test('getBoards', async () => {
    apolloClient.query = jest.fn().mockReturnValueOnce({ data: { getBoards: [{ name: 'name' }] } })
    const result = await getBoards()
    expect(apolloClient.query).toHaveBeenCalledWith({
      query: GET_BOARDS,
      variables: {},
    })
    if (result) {
      expect(result[0].name).toEqual('name')
    }
  })

  test('addBoard', async () => {
    const board: Board = { name: 'New Board' }
    apolloClient.mutate = jest.fn().mockReturnValueOnce({ data: { addBoard: board } })
    const result = await addBoard()
    expect(apolloClient.mutate).toHaveBeenCalled()
    if (result) {
      expect(result.name).toEqual('New Board')
      expect(result.colour).toEqual('#000000')
    }
  })

  test('updateBoard', async () => {
    const board: Board = { name: 'Updated Board' }
    apolloClient.mutate = jest.fn().mockReturnValueOnce({ data: { updateBoard: board } })
    const result = await updateBoard(board)
    expect(apolloClient.mutate).toHaveBeenCalledWith({
      mutation: UPDATE_BOARD,
      variables: { board },
    })
    if (result) {
      expect(result.name).toEqual('Updated Board')
    }
  })

  test('deleteBoard', async () => {
    apolloClient.mutate = jest.fn().mockReturnValueOnce({ data: { deleteBoard: 1 } })
    const result = await deleteBoard(1)
    expect(apolloClient.mutate).toHaveBeenCalledWith({
      mutation: DELETE_BOARD,
      variables: { id: 1 },
    })
    if (result) {
      expect(result).toEqual(1)
    }
  })
})
