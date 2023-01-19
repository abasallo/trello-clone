import 'dotenv/config'

import {Sequelize} from 'sequelize'

import {initializeData} from './bootstrap'
import {initializeModel} from "./model";

const SQLITE_CONNECTION_URL = 'sqlite://trello-clone-backend.sqlite'

const sequelize: Sequelize = new Sequelize(SQLITE_CONNECTION_URL)

// TODO:: Add logging - https://sequelize.org/docs/v6/getting-started/#logging
export const initialiseSequelize = async () => {
    const model = await initializeModel(await sequelize)
    await sequelize.sync();
    await initializeData(model)
    return model
}

// TODO:: Use this on server closing.
export const closeSequelize = async () => sequelize.close()
