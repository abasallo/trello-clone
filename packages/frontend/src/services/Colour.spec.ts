import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { fetchRandomColour } from './Colour'
import constants from '../modules/constants'

const mockedAxios: MockAdapter = new MockAdapter(axios)

describe('Colour Service', () => {
  test('fetchRandomColour', async () => {
    mockedAxios.onGet(constants.COLOUR_ENDPOINT).reply(200, 'result')
    const result = await fetchRandomColour()
    expect(result).toEqual('result')
  })
})
