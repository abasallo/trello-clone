import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import auth from './express/routes/auth'

import {initialiseSequelize} from './orm/sequelize'

import {initialiseApolloServer} from "./graphql/init";

export const app = express()

// TODO:: Type this
export const model: Promise<any> = initialiseSequelize()

initialiseApolloServer(app)

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/auth', auth)

export default app
