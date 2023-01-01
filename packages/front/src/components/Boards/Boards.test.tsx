import React from 'react'
import renderer from 'react-test-renderer'

import Boards from './Boards'

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

test('Renders properly', () => expect(renderer.create(<Boards boards={initialBoards} />).toJSON()).toMatchSnapshot())
