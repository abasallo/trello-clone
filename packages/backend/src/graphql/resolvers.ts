import { model } from '../app'

import { addBoard, deleteBoard, getBoards, updateBoard } from '../services/Board'

import { Board } from 'trello-clone-shared/src/model/board.model'

export const resolvers = {
  Query: {
    getBoards: (): Promise<Board[]> => getBoards(model),
  },
  Mutation: {
    addBoard: (parent: never, args: { board: Board }): Promise<Board> =>
      addBoard({ name: args.board.name, model }),
    deleteBoard: (parent: never, args: { id: number }): Promise<number> =>
      deleteBoard({ id: args.id, model }),
    updateBoard: (parent: never, args: { board: Board }): Promise<Board> =>
      updateBoard({
        id: args.board.id,
        name: args.board.name,
        model,
      }),
  },
}
