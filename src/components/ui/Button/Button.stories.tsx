import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Button } from '@/components/ui/Button'

export default { component: Button } as ComponentMeta<typeof Button>

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    color: 'primary',
    children: 'ログインする',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
}
