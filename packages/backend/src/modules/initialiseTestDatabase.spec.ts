import { initialiseTestDatabase } from './initialiseTestDatabase'
import { AppModel } from '../orm/model/app.model'

let testModel: AppModel

beforeAll(async () => (testModel = await initialiseTestDatabase()))

describe('initialiseTestDatabase', () => {
  test('DB should be properly initialized', async () => {
    expect(testModel).toBeDefined()
    expect(await testModel.Board.count()).toEqual(3)
  })
})
