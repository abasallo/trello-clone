import {
  GET_BOARDS,
  ADD_BOARD
} from './UserQueries'

test('User add query must be initialized properly', () => expect(GET_BOARDS).toMatchSnapshot())

test('Password change query must be initialized properly', () => expect(ADD_BOARD).toMatchSnapshot())
