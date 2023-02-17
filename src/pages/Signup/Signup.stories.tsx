import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { userEvent, within } from '@storybook/testing-library'

import { SignupPage } from "@/pages/Signup/index";

export default { component: SignupPage } as ComponentMeta<typeof SignupPage>

export const Success: ComponentStoryObj<typeof SignupPage> = {
  render: () => (
    <MemoryRouter>
      <SignupPage />
    </MemoryRouter>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const nameInput = canvas.getByTestId('name')
    const emailInput = canvas.getByTestId('email')
    const passwordInput = canvas.getByTestId('password')
    await userEvent.type(nameInput, 'test1', {
      delay: 100,
    })
    await userEvent.type(emailInput, 'test@example.com', {
      delay: 100,
    })
    await userEvent.type(passwordInput, 'password', {
      delay: 100,
    })
    await userEvent.click(canvas.getByRole('button'))
  },
}

export const Failed: ComponentStoryObj<typeof SignupPage> = {
  render: () => (
    <MemoryRouter>
      <SignupPage />
    </MemoryRouter>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const nameInput = canvas.getByTestId('name')
    const emailInput = canvas.getByTestId('email')
    const passwordInput = canvas.getByTestId('password')
    await userEvent.type(nameInput, 'a', {
      delay: 100,
    })
    await userEvent.clear(nameInput)
    await userEvent.type(emailInput, 'test@examplecom', {
      delay: 100,
    })
    await userEvent.type(passwordInput, 'test', {
      delay: 100,
    })
    await userEvent.click(canvas.getByText('Welcome'))
  },
}
