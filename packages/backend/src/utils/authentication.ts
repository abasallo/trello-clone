import { AuthenticationError } from 'apollo-server-errors'
import { PSK_TOKEN_NOT_VALID } from "./constants";

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
export const executeAroundAuthenticated = async (payload, token, ...params) => {
  try {
    if (process.env.PSK_TOKEN === token) {
      return payload(...params)
    }
  } catch (e) {
    throw new AuthenticationError(e)
  }
  throw new AuthenticationError(PSK_TOKEN_NOT_VALID)
}
