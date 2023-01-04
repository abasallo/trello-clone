import React from 'react'
import renderer from 'react-test-renderer'

import Boards from './Boards'

import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';

const initialBoards = [
  {
    id: '1',
    name: 'Board 1'
  },
  {
    id: '2',
    name: 'Board 2'
  },
  {
    id: '3',
    name: 'Board 3'
  }
]

const mockStore = configureStore()
const store = mockStore({
    boards: initialBoards
});

test('Renders properly', () => expect(renderer.create(
    <Provider store={store}>
      <Boards boards={initialBoards} />
    </Provider>
).toJSON()).toMatchSnapshot())
