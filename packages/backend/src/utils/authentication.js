import { AuthenticationError } from 'apollo-server-errors'

import constants from './constants'

export const executeAroundAuthenticated = async (payload, token, ...params) => {
  try {
    if (process.env.PSK_TOKEN === token) {
      return payload(...params)
    }
  } catch (e) {
    throw new AuthenticationError(e)
  }
  throw new AuthenticationError(constants.PSK_TOKEN_NOT_VALID)
}
