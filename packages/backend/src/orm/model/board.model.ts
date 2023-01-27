import {InferAttributes, InferCreationAttributes, Model} from "sequelize";
import {Board} from "../../model/board.model";

export interface BoardModel extends Model<InferAttributes<BoardModel>, InferCreationAttributes<BoardModel>>, Board {
    id: number
}
