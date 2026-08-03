import request from 'supertest'
import app from '../app'
import { connectTestDB, disconnectTestDB } from './testDB'

beforeAll(async () => {
  process.env.JWT_SECRET = 'test-secret'
  await connectTestDB()
})

afterAll(async () => {
  await disconnectTestDB()
})

describe('Authentication API', () => {
  it('registers a new user', async () => {
    const response = await request(app).post('/api/auth/register').send({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    })

    expect(response.status).toBe(201)
    expect(response.body.message).toBe('User created')
    expect(response.body.userId).toBeDefined()
  })

  it('logs in a registered user', async () => {
    const response = await request(app).post('/api/auth/login').send({
      email: 'test@example.com',
      password: 'password123',
    })

    expect(response.status).toBe(200)
    expect(response.body.token).toBeDefined()
    expect(response.body.userId).toBeDefined()
  })

  it('rejects an incorrect password', async () => {
    const response = await request(app).post('/api/auth/login').send({
      email: 'test@example.com',
      password: 'wrong-password',
    })

    expect(response.status).toBe(401)
    expect(response.body.error).toBe('Invalid credentials')
  })
})
