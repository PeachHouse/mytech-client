import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { LoginPage } from '@/pages/Login'
import { userEvent, within } from '@storybook/testing-library'
import { MemoryRouter } from 'react-router-dom'

export default { component: LoginPage } as ComponentMeta<typeof LoginPage>

export const Success: ComponentStoryObj<typeof LoginPage> = {
  render: () => (
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailInput = canvas.getByTestId('email')
    const passwordInput = canvas.getByTestId('password')
    await userEvent.type(emailInput, 'test@example.com', {
      delay: 100,
    })
    await userEvent.type(passwordInput, 'password', {
      delay: 100,
    })
    await userEvent.click(canvas.getByRole('button'))
  },
}

export const Failed: ComponentStoryObj<typeof LoginPage> = {
  render: () => (
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailInput = canvas.getByTestId('email')
    const passwordInput = canvas.getByTestId('password')
    await userEvent.type(emailInput, 'test@example.com', {
      delay: 100,
    })
    await userEvent.type(passwordInput, 'password', {
      delay: 100,
    })
    await userEvent.clear(emailInput)
    await userEvent.clear(passwordInput)
    await userEvent.click(canvas.getByRole('button'))
  },
}
