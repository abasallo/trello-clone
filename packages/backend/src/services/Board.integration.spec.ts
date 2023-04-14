import { AppModel } from '../orm/model/app.model'
import { initialiseTestDatabase } from '../modules/initialiseTestDatabase'
import { addBoard, deleteBoard, getBoards, updateBoard } from './Board'
import { Board } from 'trello-clone-shared/src/model/board.model'

let testModel: Promise<AppModel>

const ids = [1, 2, 3]
const names = ['Board I', 'Board II', 'Board III']

beforeAll(async () => (testModel = initialiseTestDatabase()))

describe('Boards Service', () => {
  describe('getBoards', () => {
    for (const [index, id] of ids.entries()) {
      test(`name is as expected for id: ${id}`, async () => {
        const boards: Board[] = await getBoards(testModel)
        expect(boards[index].name).toEqual(names[index])
      })
    }
  })

  describe('addBoard', () => {
    const newBoardName = 'Board IV'
    test(`name is set as expected: ${newBoardName}`, async () => {
      const newBoard: Board = await addBoard({
        name: newBoardName,
        model: testModel,
      })
      expect(newBoard.name).toEqual(newBoardName)
      expect(await (await testModel).Board.count()).toEqual(4)
    })
  })

  describe('updateBoard', () => {
    const updatedBoardName = 'Board I updated'
    test(`name is set as expected: ${updatedBoardName}`, async () => {
      const updatedBoard: Board = await updateBoard({
        id: 1,
        name: updatedBoardName,
        model: testModel,
      })
      expect(updatedBoard.name).toEqual(updatedBoardName)
      expect((await (await testModel).Board.findByPk(1)).name).toEqual(updatedBoardName)
    })
  })

  describe('deleteBoard', () => {
    test('number of elements is as expected', async () => {
      const numberOfDeletedBoards: number = await deleteBoard({
        id: 1,
        model: testModel,
      })
      expect(numberOfDeletedBoards).toEqual(1)
      expect(await (await testModel).Board.count()).toEqual(3)
    })
  })
})
