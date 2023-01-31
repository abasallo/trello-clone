import {InferAttributes, InferCreationAttributes, Model} from 'sequelize'

import {Board} from 'trello-clone-shared/src/model/board.model'

export interface BoardModel extends Model<InferAttributes<BoardModel>, InferCreationAttributes<BoardModel>>, Board {
    id: number
}
