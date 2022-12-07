export const initializeTestDatabase = (environment) => {
  process.env.NODE_ENV = environment
  process.env.DATABASE_URL = `sqlite://aws-monorepo-backend-${environment}.test.sqlite`
  jest.resetModules()
  const sequelize = require('../orm/sequelize')
  const model = sequelize.initSequelize()
  return { sequelize, model }
}
