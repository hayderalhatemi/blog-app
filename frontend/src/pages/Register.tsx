import { useState } from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/api/auth/register', form)
      alert('Registered successfully!')
      navigate('/login')
    } catch {
      alert('Registration failed')
    }
  }
  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="auth-badge">Join the community</span>

        <h1>Create an account</h1>

        <p className="auth-description">
          Start publishing your own posts in just a few seconds.
        </p>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          placeholder="Choose a username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Create a password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="auth-button">
          Create Account
        </button>
      </form>
    </main>
  )
}

export default Register
