import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/auth/login', form);
      login(res.data.token, res.data.userId);
      navigate('/posts');
    } catch {
      alert('Login failed');
    }
  };

  return (
  <main className="auth-page">
    <form className="auth-card" onSubmit={handleSubmit}>
      <span className="auth-badge">Welcome back</span>

      <h1>Login to your account</h1>

      <p className="auth-description">
        Enter your details to continue to the Blog App.
      </p>

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
        placeholder="Enter your password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <button type="submit" className="auth-button">
        Login
      </button>
    </form>
  </main>
);

}

export default Login;