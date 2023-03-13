import { Board } from 'trello-clone-shared/src/model/board.model'

import { initialiseTestDatabase } from '../modules/initialiseTestDatabase'
import { AppModel } from './model/app.model'

let testModel: AppModel

beforeAll(async () => (testModel = await initialiseTestDatabase()))

describe('ORM Integration Test', () => {
  test('ORM is initialised', async () => {
    expect(testModel.Board).toBeDefined()
  })

  test('Board finders work as expected - findByPk', async () => {
    const board: Board = await testModel.Board.findByPk(1)
    expect(board.id).toEqual(1)
    expect(board.name).toEqual('Board I')
  })

  test('Board finder works as expected - findAll', async () => {
    const board: Board[] = await testModel.Board.findAll()
    expect(board.length).toBe(3)
  })
})
