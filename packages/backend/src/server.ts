import { app, model } from './app'

model
  .then(() => console.log('Database initialised'))
  .catch((error) => console.error('Database initialisation error: ' + error))

const port = process.env.PORT || 4000
app.listen({ port }, () => console.log(`Server initialised on port: ${port}`))
