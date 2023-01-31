import React from 'react'
import renderer from 'react-test-renderer'

import Copyright from './Copyright'

test('Renders properly', () => expect(renderer.create(<Copyright/>).toJSON()).toMatchSnapshot())
