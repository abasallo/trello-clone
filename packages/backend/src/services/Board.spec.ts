import {getBoards, addBoard, updateBoard, deleteBoard} from './Board'
import {AppModel} from '../orm/model/app.model'
import {BoardModel} from '../orm/model/board.model'

// TODO:: Extract?
const board = {
    name: undefined,
    save: jest.fn()
} as unknown as BoardModel

// TODO:: Extract?
const modelValue = {
    User: {},
    Board: {
        findAll: jest.fn(),
        create: jest.fn(),
        findByPk: jest.fn((id) => {
            if (id === 1)
                return board
            else
                return undefined
        }),
        destroy: jest.fn()
    }
}

// TODO:: Extract?
const model = Promise.resolve(modelValue) as unknown as Promise<AppModel>

describe("Board Service", () => {
    test("getBoards", async () => {
        await getBoards(model)
        expect(modelValue.Board.findAll).toHaveBeenCalled()
    });

    test("addBoard", async () => {
        await addBoard({name: 'name', model})
        expect(modelValue.Board.create).toHaveBeenCalledWith({name: 'name'})
    });

    test("updateBoard - Board successfully updated", async () => {
        await updateBoard({id: 1, name: 'name', model})
        expect(modelValue.Board.findByPk).toHaveBeenCalledWith(1)
        expect(board.name).toEqual('name')
        expect(board.save).toHaveBeenCalled()
    });

    test("updateBoard - Board not found", async () => {
        try {
            await updateBoard({id: -1, name: 'name', model})
        } catch(e) {
            expect(modelValue.Board.findByPk).toHaveBeenCalledWith(-1)
            expect(e.name).toEqual('UserInputError')
        }
    });

    test("deleteBoard", async () => {
        await deleteBoard({id: 1, model})
        expect(modelValue.Board.destroy).toHaveBeenCalledWith({where: {id: 1}})
    });
});
