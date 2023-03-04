import { render, screen } from '@testing-library/react'
import { describe } from 'vitest'

import { LoginPage } from '@/pages/Login'

const mockedUsedNavigate = vi.fn()

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockedUsedNavigate,
}))

describe('something truthy and falsy', () => {
  test('true to be true', () => {
    render(<LoginPage />)
    screen.debug()
    expect(true).toBe(true)
  })
  test('test to be true', () => {
    expect(true).toBe(true)
  })
})
