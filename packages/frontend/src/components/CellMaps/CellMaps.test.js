import React from 'react'
import renderer from 'react-test-renderer'

import CellMaps from './CellMaps'

test('Renders properly', () => expect(renderer.create(<CellMaps />).toJSON()).toMatchSnapshot())
