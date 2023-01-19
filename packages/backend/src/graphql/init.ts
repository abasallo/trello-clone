import { ApolloServer } from 'apollo-server-express'

import {typeDefs} from "./schema";
import {resolvers} from './resolvers'

import {model} from "../app";

const apolloServer = new ApolloServer({ typeDefs, resolvers, context: { model } })

// TODO:: Type this
export const initialiseApolloServer = async (app: any) => {
    await apolloServer.start()
    apolloServer.applyMiddleware({app})
}
