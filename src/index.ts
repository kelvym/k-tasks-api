import dotenv from 'dotenv'
import app from './app'
import { connect } from './connection'

dotenv.config()

const PORT = process.env.PORT

connect()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
