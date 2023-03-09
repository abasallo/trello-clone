import {getUser} from './User'
import {AppModel} from '../orm/model/app.model'
import {UserModel} from '../orm/model/user.model'

// TODO:: Extract?
const user = {id: 1} as unknown as UserModel

// TODO:: Extract?
const modelValue = {
    User: {
        findOne: jest.fn(({where}) => {
            if (where.email === 'correct' && where.password === 'correct')
                return user
            else
                return undefined
        })
    },
    Board: {}
}

// TODO:: Extract?
const model = Promise.resolve(modelValue) as unknown as Promise<AppModel>

describe("User Service", () => {
    test("getUser - User successfully fetched", async () => {
        await getUser({email: 'correct', password: 'correct', model})
        expect(modelValue.User.findOne).toHaveBeenCalledWith({where: {email: 'correct', password: 'correct'}})
    });

    test("getUser - User not found", async () => {
        try {
            await getUser({email: 'incorrect', password: 'incorrect', model})
        } catch(e) {
            expect(modelValue.User.findOne).toHaveBeenCalledWith({where: {email: 'incorrect', password: 'incorrect'}})
            expect(e.name).toEqual('UserInputError')
        }
    });
});
