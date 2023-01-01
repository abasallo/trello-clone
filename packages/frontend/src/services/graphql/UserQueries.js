import gql from 'graphql-tag'

export const GET_USER = gql`
  query ($token: String, $email: String) {
    getUser(token: $token, email: $email) {
      id
      names
      surnames
      email
    }
  }
`

export const ADD_USER = gql`
  mutation ($token: String, $names: String, $surnames: String, $email: String!) {
    addUser(token: $token, user: { names: $names, surnames: $surnames, email: $email }) {
      id
      names
      surnames
      email
    }
  }
`
