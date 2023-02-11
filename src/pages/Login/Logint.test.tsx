import { describe, it, expect } from 'vitest'
import { LoginPage } from '@/pages/Login'
import { render, screen } from '@testing-library/react'

describe('something truthy and falsy', () => {
  // render(<LoginPage />)
  // screen.debug()

  it('true to be true', () => {
    expect(true).toBe(true)
  })
})
