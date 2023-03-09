import React from 'react'
import renderer from 'react-test-renderer'

import AppBar from './AppBar'

test('Renders properly', () => expect(renderer
    .create(<AppBar/>).toJSON()).toMatchSnapshot())
