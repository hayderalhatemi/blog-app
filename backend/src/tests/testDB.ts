import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

let mongo: MongoMemoryServer

export const connectTestDB = async () => {
  mongo = await MongoMemoryServer.create()
  await mongoose.connect(mongo.getUri())
}

export const disconnectTestDB = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongo.stop()
}
