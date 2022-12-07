import 'dotenv/config'

import express from 'express'

import cors from 'cors'

import bodyParser from 'body-parser'

import routes from './express/routes'

import { sequelize, initSequelize } from './orm/sequelize'

import { ApolloServer } from 'apollo-server-express'

import typeDefs from './graphql/schema'

import resolvers from './graphql/resolvers'

import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'

export const database = sequelize

export const model = initSequelize()

export const apolloServer = new ApolloServer({ typeDefs, resolvers, context: { model } })

export const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.sendFile('/index.html', { root: './public' }))
app.get('/favicon.ico', (req, res) => res.sendFile('/index.html', { root: './public' }))

app.use('/make', routes.make)
app.use('/model', routes.model)
app.use('/car', routes.car)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

apolloServer.applyMiddleware({ app })
