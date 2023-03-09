import axios from "axios/index";
import constants from "../utils/constants";

export const fetchRandomColour = async (): Promise<string> => {
    const { data } = await axios({
        method: 'get',
        url: constants.COLOUR_ENDPOINT,
    })
    return data
}
