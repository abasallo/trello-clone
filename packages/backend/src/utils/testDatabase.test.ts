import { initializeTestDatabase } from './testDatabase'
import { NODE_TEST_STRING, USER_DATABASE_TABLE_NAME } from "./constants";

test('Test database should be properly initialized', async () => {
  const { sequelize, model } = initializeTestDatabase(NODE_TEST_STRING)
  expect(sequelize).toBeDefined()
  expect((await model).User.tableName).toEqual(USER_DATABASE_TABLE_NAME)
})
