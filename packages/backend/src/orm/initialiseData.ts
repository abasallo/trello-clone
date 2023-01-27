import {User} from "../model/user.model";
import {Board} from "../model/board.model";
import {AppModel} from "./model/app.model";
import {UserModel} from "./model/user.model";
import {BoardModel} from "./model/board.model";

// TODO - Hash passwords
const TestUser: User = {
    names: 'name',
    surnames: 'surnames',
    email: 'user@host.tld',
    password: 'password'
}

export const TestBoard: Board = {
    name: 'boardName',
}

export const initialiseData = async (model: AppModel): Promise<Awaited<UserModel | BoardModel>[]> => {
    return Promise.all([
        model.User.create(TestUser),
        model.Board.create(TestBoard)
    ])
}
