// TODO - Hash passwords
export const TestUser = {
    names: 'name',
    surnames: 'surnames',
    email: 'user@host.tld',
    password: 'password'
}

export const TestBoard = {
    name: 'boardName',
}

// TODO:: Type this
export const initializeData = async (model: any) => {
    await model.User.create(TestUser)
    await model.Board.create(TestBoard)
}
