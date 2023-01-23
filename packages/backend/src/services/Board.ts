// TODO:: Type this
export const getBoards = async (model: any) => (await model).Board.findAll()

// TODO:: Type this
export const addBoard = async (board: { name: string }, model: any) => {
  return (await model).Board.create({ name: board.name })
}

// TODO:: Type this
export const updateBoard = async (board: { id: number; name: string }, model: any) => {
    const ormBoard = await (await model).Board.findByPk(board.id)
    if (ormBoard) {
        ormBoard.name = board.name
        ormBoard.save()
    }
    return ormBoard
}

// TODO:: Type this
export const deleteBoard = async (id: string, model: any) => {
  return (await model).Board.destroy({ where: {id} })
}