import axios from 'axios'
import constants from '../modules/constants'

export const fetchRandomColour = async (): Promise<string> => {
  const { data } = await axios.get(constants.COLOUR_ENDPOINT)
  return data
}
