import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Header } from '@/components/ui/Header/index'
import { MemoryRouter } from 'react-router-dom'

export default { component: Header } as ComponentMeta<typeof Header>

export const Default: ComponentStoryObj<typeof Header> = {
  render: () => (
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ),
}
