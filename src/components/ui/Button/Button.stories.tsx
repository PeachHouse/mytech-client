import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Button } from '@/components/ui/Button'

export default { component: Button } as ComponentMeta<typeof Button>

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    color: 'primary',
    children: 'ボタン',
    isLoading: false,
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
    isLoading: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
}

export const WithLoadingButton: ComponentStoryObj<typeof Button> = {
  args: {
    color: 'primary',
    children: 'ローディングボタン',
    isLoading: true,
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
    isLoading: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
}
