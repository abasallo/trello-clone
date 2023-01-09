import { NODE_PRODUCTION_STRING } from "../utils/constants";

export const TestUser = {
  names: 'name',
  surnames: 'surnames',
  email: 'user@host.tld'
}

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
export const initializeData = (model, env) => {
  if (env !== NODE_PRODUCTION_STRING) {
    model.User.create(TestUser)
  }
}
