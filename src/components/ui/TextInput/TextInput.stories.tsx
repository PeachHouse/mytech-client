import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { TextInput } from '@/components/ui/TextInput'

export default { component: TextInput } as ComponentMeta<typeof TextInput>

export const Default: ComponentStoryObj<typeof TextInput> = {
  args: {
    type: 'text',
    placeholder: 'テキスト',
  },
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
  },
}
