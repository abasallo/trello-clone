import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import index from './express/routes/index'
import auth from './express/routes/auth'

import {initialiseSequelize} from './orm/initialiseSequelize'
import {AppModel} from "./orm/model/app.model";

import {initialiseApolloServer} from "./graphql/init";
export const app = express()

export const model: Promise<AppModel> = initialiseSequelize()

initialiseApolloServer(app)
    .then(() => console.log('Apollo Server initialised'))
    .catch((error) => console.error('Apollo Server initialisation error: ' + error))

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', index)
app.use('/auth', auth)

export default app
