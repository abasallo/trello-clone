
import {AppModel} from "./model/app.model";
import {UserModel} from "./model/user.model";
import {BoardModel} from "./model/board.model";

import {User} from "trello-clone-shared/src/model/user.model";
import {Board} from "trello-clone-shared/src/model/board.model";

export const TestBoard: Board = {
    name: 'boardName',
}

export const initialiseData = async (model: AppModel): Promise<Awaited<UserModel | BoardModel>[]> => Promise.all([model.Board.create(TestBoard)])
