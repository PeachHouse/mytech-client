import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { InputField } from '@/components/functional/Form/InputField'
import { FiMail } from 'react-icons/all'

export default { component: InputField } as ComponentMeta<typeof InputField>

export const Success: ComponentStoryObj<typeof InputField> = {
  args: {
    type: 'text',
    placeholder: 'テキスト',
    icon: <FiMail size={25} color='#686d75' />,
  },
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
  },
}

export const Failed: ComponentStoryObj<typeof InputField> = {
  args: {
    type: 'text',
    placeholder: 'テキスト',
    icon: <FiMail size={25} color='#686d75' />,
    error: {
      type: 'required',
      message: 'error',
    },
  },
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
  },
}
