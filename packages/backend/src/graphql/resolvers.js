import { getUser, addUser } from '../services/User'

export default {
  Query: {
    getUser: (parent, { token, email }, { model }) => getUser(token, email, model)
  },
  Mutation: {
    addUser: (parent, { token, user }, { model }) => addUser(token, user, model)
  }
}
