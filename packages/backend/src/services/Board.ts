import { UserInputError } from 'apollo-server-errors'

// TODO:: Type this
export const getBoard = async (id: number, model: any) => {
  const board = (await model).Board.findOne({ where: { id: id } })
  if (!board) throw new UserInputError(`Cannot find a Board with id: ${id}`)
  return board
}

// TODO:: Type this
export const addBoard = async (board: { name: string }, model: any) => {
  return (await model).Board.create({ name: board.name })
}
