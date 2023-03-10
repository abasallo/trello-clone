import { ModelStatic } from 'sequelize/types/model'
import { BoardModel } from './board.model'

export interface AppModel {
  Board: ModelStatic<BoardModel>
}
