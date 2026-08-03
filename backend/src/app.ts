import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/authRoutes'
import postRoutes from './routes/postRoutes'
import swaggerSpec from './config/swagger'

import swaggerUi from 'swagger-ui-express'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

app.get('/', (_, res) => {
  res.send('Blog API is running')
})

export default app
