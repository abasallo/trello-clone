import { Express } from 'express'

import { ApolloServer } from 'apollo-server-express'

import { typeDefs } from './schema'
import { resolvers } from './resolvers'

import { model } from '../app'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: { model },
})

export const initialiseApolloServer = async (app: Express): Promise<void> => {
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
}
