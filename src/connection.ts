import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGO_CLIENT_URL || ''

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

export async function connect() {
  try {
    client.connect()
  } catch (e) {
    console.log(e)
  } finally {
    await client.close()
  }
}

connect().catch(console.error)
