import { GET_BOARDS, ADD_BOARD, UPDATE_BOARD, DELETE_BOARD } from './UserQueries'

test('Get Boards query be initialized properly', () => expect(GET_BOARDS).toMatchSnapshot())

test('Add Board mutation must be initialized properly', () => expect(ADD_BOARD).toMatchSnapshot())

test('Update Board mutation must be initialized properly', () => expect(UPDATE_BOARD).toMatchSnapshot())

test('Delete Board mutation must be initialized properly', () => expect(DELETE_BOARD).toMatchSnapshot())
