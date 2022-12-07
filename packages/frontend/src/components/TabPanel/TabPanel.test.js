import React from 'react'
import renderer from 'react-test-renderer'

import TabPanel from './TabPanel'

test('Renders properly', () => expect(renderer.create(<TabPanel index={0} value={0} />).toJSON()).toMatchSnapshot())
