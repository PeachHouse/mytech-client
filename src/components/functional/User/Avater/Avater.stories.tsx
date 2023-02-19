import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Avater } from '@/components/functional/User/Avater'

export default { component: Avater } as ComponentMeta<typeof Avater>

export const Default: ComponentStoryObj<typeof Avater> = {
  args: {
    size: 'small',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
}
