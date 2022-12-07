import { ValidationError, UserInputError } from 'apollo-server-errors'

import constants from '../utils/constants'

import { executeAroundAuthenticated } from '../utils/authentication'

export const getUser = async (token, email, model) => executeAroundAuthenticated(getUserPayload, token, email, model)

export const getUserPayload = async (email, model) => {
  const user = (await model).User.findOne({ where: { email: email } })
  if (!user) throw new UserInputError(constants.USER_ERROR_MESSAGE_NON_EXISTENT)
  return user
}

export const addUser = async (token, user, model) => executeAroundAuthenticated(addUserPayload, token, user, model)

export const addUserPayload = async (user, model) => {
  if (!(await (await model).User.findOne({ where: { email: user.email } }))) {
    return (await model).User.create({
      names: user.names,
      surnames: user.surnames,
      email: user.email
    })
  }
  throw new ValidationError(constants.USER_ERROR_MESSAGE_ALREADY_USED)
}
