import 'dotenv/config'

import Sequelize from 'sequelize'

import { initializeModel } from './model'
import { initializeData } from './bootstrap'
import {NODE_PRODUCTION_STRING, NODE_TEST_STRING} from "../utils/constants";

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
const connectWithUrl = (url) => new Sequelize(url, { logging: false })

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
export const connectWithOptions = (dbDialect, dbPath, dbPoolMax, dbPoolMin, dbPoolIdle) => {
  // TODO - Proper typings and remove ts-ignore
  // @ts-ignore
  return new Sequelize({
    dialect: dbDialect,
    storage: dbPath,
    pool: { max: parseInt(dbPoolMax), min: parseInt(dbPoolMin), idle: parseInt(dbPoolIdle) },
    logging: false
  })
}

export const sequelize = (() => {
  if (process.env.NODE_ENV === NODE_PRODUCTION_STRING) {
    return connectWithUrl(process.env.DATABASE_URL)
  }

  if (process.env.NODE_ENV === NODE_TEST_STRING) {
    return connectWithOptions(
      process.env.DATABASE_DIALECT,
      process.env.DATABASE_PATH_TEST,
      process.env.DATABASE_POOL_MAX,
      process.env.DATABASE_POOL_MIN,
      process.env.DATABASE_POOL_IDLE
    )
  }

  return connectWithOptions(
    process.env.DATABASE_DIALECT,
    process.env.DATABASE_PATH,
    process.env.DATABASE_POOL_MAX,
    process.env.DATABASE_POOL_MIN,
    process.env.DATABASE_POOL_IDLE
  )
})()

export const initSequelize = async () => {
  const model = initializeModel(await sequelize)
  await sequelize.sync({ force: !(process.env.NODE_ENV === NODE_PRODUCTION_STRING) })
  await initializeData(model, process.env.NODE_ENV)
  return model
}

export const closeSequelize = () => sequelize.close()
