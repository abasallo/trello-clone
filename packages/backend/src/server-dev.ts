import { app, model } from './app'
import {
    SERVER_INITIALIZATION_DATABASE_KO,
    SERVER_INITIALIZATION_DATABASE_OK,
    SERVER_INITIALIZATION_OK
} from "./utils/constants";

model
    .then(() => console.log(SERVER_INITIALIZATION_DATABASE_OK))
    .catch((error) => console.error(SERVER_INITIALIZATION_DATABASE_KO + error))

const port = process.env.PORT || 4000
app.listen({ port }, () => console.log(SERVER_INITIALIZATION_OK + port))
