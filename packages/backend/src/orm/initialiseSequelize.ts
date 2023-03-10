import { Sequelize } from 'sequelize'

import { initializeModel } from './initialiseModel'
import { AppModel } from './model/app.model'

export const initialiseSequelize = async (CONNECTION_URL: string): Promise<AppModel> => {
  const sequelize: Sequelize = new Sequelize(CONNECTION_URL)
  const model = initializeModel(sequelize)
  await sequelize.sync()
  return model
}
