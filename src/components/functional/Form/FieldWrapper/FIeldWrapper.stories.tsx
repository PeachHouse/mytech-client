import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { FieldWrapper, InputField } from '@/components/functional/Form'

export default { component: FieldWrapper } as ComponentMeta<typeof FieldWrapper>

export const Default: ComponentStoryObj<typeof FieldWrapper> = {
  args: {
    label: 'label',
    error: {
      type: 'required',
      message: 'error',
    },
    children: <InputField />,
  },
}
