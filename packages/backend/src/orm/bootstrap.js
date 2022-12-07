import constants from '../utils/constants'

export const TestUser = {
  names: 'name',
  surnames: 'surnames',
  email: 'user@host.tld'
}

export const initializeData = (model, env) => {
  if (env !== constants.NODE_PRODUCTION_STRING) {
    model.User.create(TestUser)
  }
}
