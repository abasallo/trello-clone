import {InferAttributes, InferCreationAttributes, Model} from "sequelize";
import {User} from "../../model/user.model";

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>>, User {
    id: number
}
