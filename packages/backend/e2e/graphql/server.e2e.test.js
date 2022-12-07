import { createApolloFetch } from 'apollo-fetch'
import { ApolloServer } from 'apollo-server'

import { database, model } from '../src/server-helper'

import { addUserPayload, getUserPayload } from '../src/services/User'

import typeDefs from '../src/graphql/schema'
// TODO - Fix these tests
// TODO - Add a better / cleaner way to disable authentication, without partial duplication of resolvers
const resolvers = {
  Query: {
    getUser: (parent, { email }, { model }) => getUserPayload(email, model)
  },
  Mutation: {
    addUser: (parent, { user }, { model }) => addUserPayload(user, model)
  }
}

const server = new ApolloServer({ typeDefs, resolvers, context: { model } })

const HOST = 'localhost'
const PORT = '4001'

let fetch
beforeAll(async () => {
  await model
  fetch = await createApolloFetch({ uri: `http://${HOST}:${PORT}/graphql` })
  await server.listen({ port: PORT })
})

afterAll(async () => {
  await (await database).close()
  await server.stop()
})

test('Get user by email', async () => {
  expect(
    await fetch({
      query: `query($email: String) { 
                getUser(email: $email) {
                  id
                  names
                  surnames
                  email
                }
              }`,
      variables: { email: 'user@host.tld' }
    })
  ).toMatchSnapshot()
})

test('Add user', async () => {
  expect(
    await fetch({
      query: `mutation($names: String, $surnames: String, $email: String!) {
                addUser(user: { names: $names, surnames: $surnames, email: $email }) {
                  id
                  names
                  surnames
                  email
                }
              }`,
      variables: { names: 'names', surnames: 'surnames', email: 'email' }
    })
  ).toMatchSnapshot({ data: { addUser: { id: expect.any(String) } } })
})
