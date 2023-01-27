import {model} from '../app';

import {addBoard, deleteBoard, getBoards, updateBoard} from '../services/Board'

import {Board} from "../model/board.model";

// TODO:: Type this
export const resolvers = {
    Query: {
        getBoards: (): Promise<Board[]> => getBoards(model)
    },
    Mutation: {
        addBoard: (parent: any, args: {board: Board}): Promise<Board> => addBoard({name: args.board.name, model}),
        deleteBoard: (parent: any, args: {id: string}): Promise<number> => deleteBoard({id: args.id, model}),
        updateBoard: (parent: any, args: {board: Board}): Promise<Board> => updateBoard({
            id: args.board.id,
            name: args.board.name,
            model
        })
    }
}
