import { getUser, addUser } from '../services/User'

export default {
  Query: {
    // TODO - Proper typings and remove ts-ignore
    // @ts-ignore
    getUser: (parent, { token, email }, { model }) => getUser(token, email, model)
  },
  Mutation: {
    // TODO - Proper typings and remove ts-ignore
    // @ts-ignore
    addUser: (parent, { token, user }, { model }) => addUser(token, user, model)
  }
}
