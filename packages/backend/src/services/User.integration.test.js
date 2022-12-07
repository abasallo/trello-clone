import 'dotenv/config'

import { initializeTestDatabase } from '../utils/testDatabase'

import { ValidationError } from 'apollo-server-errors'

import { getUserPayload, addUserPayload } from './User'

import constants from '../utils/constants'

import { TestUser } from '../orm/bootstrap'

let sequelize
let model

beforeEach(async () => ({ sequelize, model } = await initializeTestDatabase(constants.NODE_DEVELOPMENT_STRING)))

afterEach(async () => await sequelize.closeSequelize())

test('Tries to get non existing User', () => expect(getUserPayload('inexistentUser@host.tld', model)).resolves.toBeNull())

test('Adds user, if not already exists', async () =>
  await expect(addUserPayload(TestUser, model)).rejects.toThrow(new ValidationError(constants.USER_ERROR_MESSAGE_ALREADY_USED)))

test('Gets existing User', () => expect(getUserPayload(TestUser.email, model)).resolves.toBeTruthy())
