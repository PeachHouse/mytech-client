import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Avatar } from '@/components/model/User/Avatar'

export default { component: Avatar } as ComponentMeta<typeof Avatar>

export const Default: ComponentStoryObj<typeof Avatar> = {
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
