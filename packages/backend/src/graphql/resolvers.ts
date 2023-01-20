import {model} from '../app';

import { getBoard, addBoard } from '../services/Board'

// TODO:: Type this
export const resolvers = {
  Query: {
    getBoard: (parent: any, args: { id: number }) => getBoard(args.id, model)
  },
  Mutation: {
    addBoard: (parent: any, args: any) => addBoard(args.board, model)
  }
}
