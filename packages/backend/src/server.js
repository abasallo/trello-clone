import { model, app } from './server-helper'

import constants from './utils/constants'

model
  .then(() => console.log(constants.SERVER_INITIALIZATION_DATABASE_OK))
  .catch((error) => console.error(constants.SERVER_INITIALIZATION_DATABASE_KO + error))

const port = process.env.PORT || 4000
app.listen({ port }, () => console.log(constants.SERVER_INITIALIZATION_OK + port))
