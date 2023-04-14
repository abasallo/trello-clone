import { initialiseSequelize } from '../orm/initialiseSequelize'
import { AppModel } from '../orm/model/app.model'

const TEST_CONNECTION_URL = 'sqlite://motorway-takehome-backend.test.sqlite'

let testModel: AppModel

const destroyTestDatabase = (): Promise<[number]> =>
  Promise.all([testModel.Board.destroy({ truncate: true })])

export const initialiseTestDatabase = async (): Promise<AppModel> => {
  testModel = await initialiseSequelize(TEST_CONNECTION_URL)

  await destroyTestDatabase()

  await Promise.all([
    testModel.Board.create({ id: 1, name: 'Board I' }),
    testModel.Board.create({ id: 2, name: 'Board II' }),
    testModel.Board.create({ id: 3, name: 'Board III' }),
  ])

  return testModel
}
