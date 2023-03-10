import gql from 'graphql-tag'

export const GET_BOARDS = gql`
  query {
    getBoards {
      id
      name
    }
  }
`

export const ADD_BOARD = gql`
  mutation ($board: BoardInput!) {
    addBoard(board: $board) {
      id
      name
    }
  }
`

export const UPDATE_BOARD = gql`
  mutation ($board: BoardInput!) {
    updateBoard(board: $board) {
      id
      name
    }
  }
`

export const DELETE_BOARD = gql`
  mutation ($id: ID!) {
    deleteBoard(id: $id)
  }
`
