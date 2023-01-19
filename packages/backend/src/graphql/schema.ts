import { gql } from 'apollo-server'

export const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    getBoard(id: String!): Board
  }

  type Mutation {
    addBoard(board: BoardInput!): Board
  }

  type Board {
    id: ID!
    name: String!
  }

  input BoardInput {
    name: String!
  }
`
