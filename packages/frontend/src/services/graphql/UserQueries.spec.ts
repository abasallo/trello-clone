import { ADD_BOARD, GET_BOARDS } from './UserQueries'

test('User add query must be initialized properly', () => expect(GET_BOARDS).toMatchSnapshot())

test('Password change query must be initialized properly', () => expect(ADD_BOARD).toMatchSnapshot())
