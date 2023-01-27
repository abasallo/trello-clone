import {ModelStatic} from "sequelize/types/model";
import {UserModel} from "./user.model";
import {BoardModel} from "./board.model";

export interface AppModel {
    User: ModelStatic<UserModel>
    Board: ModelStatic<BoardModel>
}
