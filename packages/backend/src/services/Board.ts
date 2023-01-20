// TODO:: Type this
export const getBoards = async (model: any) => (await model).Board.findAll()

// TODO:: Type this
export const addBoard = async (board: { name: string }, model: any) => {
  return (await model).Board.create({ name: board.name })
}
