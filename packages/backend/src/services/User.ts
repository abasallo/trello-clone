import {UserInputError} from 'apollo-server-errors'

import {AppModel} from '../orm/model/app.model'

import {User} from "trello-clone-shared/src/model/user.model";

export const getUser = async ({
    email,
    password,
    model
}: {
    email: string
    password: string
    model: Promise<AppModel>
}): Promise<User> => {
    const user: Promise<User> = (await model).User.findOne({where: {email, password}})
    if (!user)
        throw new UserInputError(`Cannot find a User with email: ${email}, or wrong password.`)
    return user
}
