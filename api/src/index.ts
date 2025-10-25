import profileRouter from './user/routes/profile.route'
import init from './init.config'

const app = init
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here!!')
  res.send('pong')
})

app.use('/api/profile', profileRouter)

export default app
