import { apolloClient } from './graphql/apolloClient'

import {GET_BOARDS, ADD_BOARD, DELETE_BOARD, UPDATE_BOARD} from './graphql/UserQueries'

export const getBoards = async () => {
  const { data } = await apolloClient.query({
    query: GET_BOARDS,
    variables: {}
  })
  return data.getBoards
}

// TODO:: Type this
export const addBoard = async () => {
  try {
    const board = {
      "name": "New Board"
    }
    const { data } = await apolloClient.mutate({
      mutation: ADD_BOARD,
      variables: {board}
    })
    return data.addBoard
  } catch (error) {
    // TODO:: Do something with errors
    return undefined
  }
}

// TODO:: Type this
export const updateBoard = async (board: { id: number; name: string }) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: UPDATE_BOARD,
      variables: {board}
    })
    return data.updateBoard
  } catch (error) {
    // TODO:: Do something with errors
    return undefined
  }
}

// TODO:: Type this
export const deleteBoard = async (id: number) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: DELETE_BOARD,
      variables: {id}
    })
    return data.deleteBoard
  } catch (error) {
    // TODO:: Do something with errors
    return undefined
  }
}
