import { gql } from 'apollo-server'

export default gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    getUser(token: String, email: String): User
  }

  type Mutation {
    addUser(token: String, user: UserInput!): User
  }

  type User {
    id: ID!
    names: String
    surnames: String
    email: String!
  }

  input UserInput {
    names: String
    surnames: String
    email: String!
  }
`
