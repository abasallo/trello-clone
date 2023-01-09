import { ValidationError, UserInputError } from 'apollo-server-errors'

import { executeAroundAuthenticated } from '../utils/authentication'
import { USER_ERROR_MESSAGE_ALREADY_USED, USER_ERROR_MESSAGE_NON_EXISTENT } from "../utils/constants";

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
export const getUser = async (token, email, model) => executeAroundAuthenticated(getUserPayload, token, email, model)

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
export const getUserPayload = async (email, model) => {
  const user = (await model).User.findOne({ where: { email: email } })
  if (!user) throw new UserInputError(USER_ERROR_MESSAGE_NON_EXISTENT)
  return user
}

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
export const addUser = async (token, user, model) => executeAroundAuthenticated(addUserPayload, token, user, model)

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
export const addUserPayload = async (user, model) => {
  if (!(await (await model).User.findOne({ where: { email: user.email } }))) {
    return (await model).User.create({
      names: user.names,
      surnames: user.surnames,
      email: user.email
    })
  }
  throw new ValidationError(USER_ERROR_MESSAGE_ALREADY_USED)
}
