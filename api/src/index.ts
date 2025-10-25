import express from 'express'

import profileRouter from './user/routes/profile.route'
import { errorHandler } from './utils/async.wrapper'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here!!')
  res.send('pong')
})

app.use('/api/profile', profileRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use(errorHandler)

export default app
