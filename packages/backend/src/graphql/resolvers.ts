import { model } from '../app';

import { getBoards, addBoard, updateBoard, deleteBoard } from '../services/Board'

// TODO:: Type this
export const resolvers = {
  Query: {
    getBoards: () => getBoards(model)
  },
  Mutation: {
    addBoard: (parent: any, args: any) => addBoard(args.board, model),
    deleteBoard: (parent: any, args: any) => deleteBoard(args.id, model),
    updateBoard: (parent: any, args: any) => updateBoard(args.board, model)
  }
}
