import {gql} from 'apollo-server'

export const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    getBoards: [Board]
  }

  type Mutation {
    addBoard(board: BoardInput!): Board
    deleteBoard(id: ID!): Int
    updateBoard(board: BoardInput!): Board
  }

  type Board {
    id: ID!
    name: String!
  }

  input BoardInput {
    id: ID
    name: String!
  }
`
