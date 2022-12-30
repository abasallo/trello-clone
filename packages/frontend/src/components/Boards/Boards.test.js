import React from 'react'
import renderer from 'react-test-renderer'

import Boards from './Boards'

const initialBoards = [
	{
		name: 'Board 1'
	},
	{
		name: 'Board 2'
	},
	{
		name: 'Board 3'
	}
]

test('Renders properly', () => expect(renderer.create(<Boards boards={initialBoards} />).toJSON()).toMatchSnapshot())
