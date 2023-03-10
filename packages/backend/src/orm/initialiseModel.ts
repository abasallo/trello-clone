import { DataTypes, Sequelize } from 'sequelize'
import { ModelStatic } from 'sequelize/types/model'
import { BoardModel } from './model/board.model'
import { AppModel } from './model/app.model'

const Board = (sequelize: Sequelize): ModelStatic<BoardModel> =>
  sequelize.define<BoardModel>('Board', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING }
  })

export const initializeModel = (sequelize: Sequelize): AppModel => ({
  Board: Board(sequelize)
})
