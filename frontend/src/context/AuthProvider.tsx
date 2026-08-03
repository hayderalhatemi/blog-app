import { useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext } from './authContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token'),
  )
  const [userId, setUserId] = useState<string | null>(
    localStorage.getItem('userId'),
  )

  const login = (t: string, id: string) => {
    localStorage.setItem('token', t)
    localStorage.setItem('userId', id)
    setToken(t)
    setUserId(id)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    setToken(null)
    setUserId(null)
  }

  return (
    <AuthContext.Provider value={{ token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
