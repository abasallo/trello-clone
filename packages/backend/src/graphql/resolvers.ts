import { model } from '../app';

import { getBoards, addBoard } from '../services/Board'

// TODO:: Type this
export const resolvers = {
  Query: {
    getBoards: () => getBoards(model)
  },
  Mutation: {
    addBoard: (parent: any, args: any) => addBoard(args.board, model)
  }
}
