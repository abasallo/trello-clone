import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import index from './express/routes/index'

import {initialiseSequelize} from './orm/initialiseSequelize'
import {AppModel} from "./orm/model/app.model";

import {initialiseApolloServer} from "./graphql/init";
import colour from "./express/routes/colour";
import {initialiseTestDatabase} from "./modules/initialiseTestDatabase";
export const app = express()

export const model: Promise<AppModel> = process.env.CONNECTION_URL
    ? initialiseSequelize(process.env.CONNECTION_URL)
    : initialiseTestDatabase()

initialiseApolloServer(app)
    .then(() => console.log('Apollo Server initialised'))
    .catch((error) => console.error('Apollo Server initialisation error: ' + error))

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', index)
app.use('/colour', colour)

export default app
