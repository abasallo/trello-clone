import {DataTypes, Sequelize} from 'sequelize'
import {ModelStatic} from "sequelize/types/model";
import {UserModel} from "./model/user.model";
import {BoardModel} from "./model/board.model";
import {AppModel} from "./model/app.model";

const User = (sequelize: Sequelize): ModelStatic<UserModel> =>
    sequelize.define<UserModel>('User', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        names: {type: DataTypes.STRING},
        surnames: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING}
    })



const Board = (sequelize: Sequelize): ModelStatic<BoardModel> =>
    sequelize.define<BoardModel>('Board', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING}
    })

export const initializeModel = (sequelize: Sequelize): AppModel  => ({
    User: User(sequelize),
    Board: Board(sequelize)
})
