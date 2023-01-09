import 'dotenv/config'

import { initializeTestDatabase } from '../utils/testDatabase'

import { ValidationError } from 'apollo-server-errors'

import { getUserPayload, addUserPayload } from './User'

import { TestUser } from '../orm/bootstrap'
import { NODE_DEVELOPMENT_STRING, USER_ERROR_MESSAGE_ALREADY_USED } from "../utils/constants";

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
let sequelize
// TODO - Proper typings and remove ts-ignore
// @ts-ignore
let model

beforeEach(async () => ({ sequelize, model } = await initializeTestDatabase(NODE_DEVELOPMENT_STRING)))

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
afterEach(async () => await sequelize.closeSequelize())

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
test('Tries to get non existing User', () => expect(getUserPayload('inexistentUser@host.tld', model)).resolves.toBeNull())

test('Adds user, if not already exists', async () =>
  // TODO - Proper typings and remove ts-ignore
  // @ts-ignore
  await expect(addUserPayload(TestUser, model)).rejects.toThrow(new ValidationError(USER_ERROR_MESSAGE_ALREADY_USED)))

// TODO - Proper typings and remove ts-ignore
// @ts-ignore
test('Gets existing User', () => expect(getUserPayload(TestUser.email, model)).resolves.toBeTruthy())
