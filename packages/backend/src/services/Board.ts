import {Board} from '../model/board.model'
import {AppModel} from '../orm/model/app.model'
import {BoardModel} from "../orm/model/board.model";
import {UserInputError} from "apollo-server-errors";

export const getBoards = async (model: Promise<AppModel>): Promise<Board[]> =>
    (await model).Board.findAll()

export const addBoard = async ({
                                   name,
                                   model
                               }: {
    name: string,
    model: Promise<AppModel>
}): Promise<Board> =>
    (await model).Board.create({name})

export const updateBoard = async ({
                                      id,
                                      name,
                                      model
                                  }: {
    id: number
    name: string
    model: Promise<AppModel>
}): Promise<Board> => {
    const board: BoardModel = await (await model).Board.findByPk(id)
    if (!board)
        throw new UserInputError(`Cannot find a Board with id: ${id}.`)
    board.name = name
    return board.save()
}

export const deleteBoard = async ({
                                      id,
                                      model
                                  }: {
    id: string
    model: Promise<AppModel>
}): Promise<number> =>
    (await model).Board.destroy({where: {id}})
