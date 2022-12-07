import React from 'react'
import renderer from 'react-test-renderer'

import TabBar from './TabBar'

test('Renders properly', () =>
  expect(renderer.create(<TabBar user={{ names: 'names', surnames: 'surnames', email: 'email' }} />).toJSON()).toMatchSnapshot())
