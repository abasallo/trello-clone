import { apolloClient } from './graphql/apolloClient'

import { GET_USER, ADD_USER } from './graphql/UserQueries'

export const getUser = async (email) => {
  const { data } = await apolloClient.query({
    query: GET_USER,
    variables: {
      token: process.env.REACT_APP_PSK_TOKEN,
      email: email
    }
  })
  return data.getUser
}

export const addUser = async (user) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: ADD_USER,
      variables: {
        token: process.env.REACT_APP_PSK_TOKEN,
        names: user.names,
        surnames: user.surnames,
        email: user.email
      }
    })
    return data.addUser
  } catch (error) {
    return undefined
  }
}
