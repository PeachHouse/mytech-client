import { MemoryRouter } from 'react-router-dom'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Header } from '@/components/ui/Header/index'

export default { component: Header } as ComponentMeta<typeof Header>

export const Default: ComponentStoryObj<typeof Header> = {
  render: () => (
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ),
}
