import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import Navbar from './Navbar'

const mockUseAuth = vi.fn()

vi.mock('../context/useAuth', () => ({
  useAuth: () => mockUseAuth(),
}))

describe('Navbar', () => {
  it('shows Login and Register when logged out', () => {
    mockUseAuth.mockReturnValue({
      token: null,
      logout: vi.fn(),
    })

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )

    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
    expect(screen.queryByText('Logout')).not.toBeInTheDocument()
  })

  it('shows Logout when logged in', () => {
    mockUseAuth.mockReturnValue({
      token: 'fake-token',
      logout: vi.fn(),
    })

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )

    expect(screen.getByText('Logout')).toBeInTheDocument()
    expect(screen.queryByText('Login')).not.toBeInTheDocument()
    expect(screen.queryByText('Register')).not.toBeInTheDocument()
  })
})
