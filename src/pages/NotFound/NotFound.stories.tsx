import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { NotFoundPage } from '@/pages/NotFound'
import { MemoryRouter } from 'react-router-dom'

export default { component: NotFoundPage } as ComponentMeta<typeof NotFoundPage>

export const Default: ComponentStoryObj<typeof NotFoundPage> = {
  render: () => (
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  ),
}
