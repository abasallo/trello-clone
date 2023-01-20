import { apolloClient } from './graphql/apolloClient'

import { GET_BOARDS, ADD_BOARD } from './graphql/UserQueries'

export const getBoards = async () => {
  const { data } = await apolloClient.query({
    query: GET_BOARDS,
    variables: {}
  })
  return data.getBoards
}

// TODO:: Type this
export const addBoard = async (board: any) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: ADD_BOARD,
      variables: {board}
    })
    return data.addBoard
  } catch (error) {
    return undefined
  }
}
