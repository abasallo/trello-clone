import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { reducer } from '../../redux/store'

import { Board } from 'trello-clone-shared/src/model/board.model'

import Boards from './Boards'

// TODO:: Extract this
const boards: Board[] = [
  { id: 1, name: 'name-1' },
  { id: 2, name: 'name-2' }
]

// TODO:: Consider adding an integration test with actual mocked fetchers
export const store = configureStore({
  reducer,
  preloadedState: { boards }
})

test('Renders properly', () =>
  expect(
    renderer
      .create(
        <Provider store={store}>
          <Boards />
        </Provider>
      )
      .toJSON()
  ).toMatchSnapshot())
