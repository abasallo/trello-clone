import {Sequelize} from 'sequelize'

import {initialiseData} from './initialiseData'
import {initializeModel} from "./initialiseModel";
import {AppModel} from "./model/app.model";

const SQLITE_CONNECTION_URL = 'sqlite://trello-clone-backend.sqlite'

const sequelize: Sequelize = new Sequelize(SQLITE_CONNECTION_URL)

// TODO:: Add logging - https://sequelize.org/docs/v6/getting-started/#logging
export const initialiseSequelize = async (): Promise<AppModel> => {
    const model: AppModel = initializeModel(sequelize)
    await sequelize.sync();
    await initialiseData(model)
    return model
}

// TODO:: Use this on server closing.
export const closeSequelize = async () => sequelize.close()
