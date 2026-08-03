import request from 'supertest'
import app from '../app'
import { connectTestDB, disconnectTestDB } from './testDB'

let token: string
let postId: string

beforeAll(async () => {
  process.env.JWT_SECRET = 'test-secret'
  await connectTestDB()

  await request(app).post('/api/auth/register').send({
    username: 'postuser',
    email: 'post@example.com',
    password: 'password123',
  })

  const loginResponse = await request(app).post('/api/auth/login').send({
    email: 'post@example.com',
    password: 'password123',
  })

  token = loginResponse.body.token
})

afterAll(async () => {
  await disconnectTestDB()
})

describe('Posts API', () => {
  it('creates a post', async () => {
    const response = await request(app)
      .post('/api/posts')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test post',
        content: 'Test content',
      })

    expect(response.status).toBe(201)
    expect(response.body.title).toBe('Test post')
    expect(response.body.content).toBe('Test content')

    postId = response.body._id
  })

  it('gets all posts', async () => {
    const response = await request(app).get('/api/posts')

    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(1)
    expect(response.body[0].title).toBe('Test post')
  })

  it('rejects creating a post without authentication', async () => {
    const response = await request(app).post('/api/posts').send({
      title: 'Unauthorized post',
      content: 'Unauthorized content',
    })

    expect(response.status).toBe(401)
  })

  it('deletes the author’s own post', async () => {
    const response = await request(app)
      .delete(`/api/posts/${postId}`)
      .set('Authorization', `Bearer ${token}`)

    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Post deleted')
  })
})
