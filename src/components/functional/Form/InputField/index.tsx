import { FC, ReactNode } from 'react'
import { UseFormRegisterReturn, FieldError } from 'react-hook-form'

import { FieldWrapper } from '@/components/functional/Form'
import { TextInput } from '@/components/ui'

type InputFieldProps = {
  type?: 'text' | 'password'
  registration?: UseFormRegisterReturn
  placeholder?: string
  error?: FieldError
  icon?: ReactNode
  testId?: string
}

export const InputField: FC<InputFieldProps> = (props) => {
  return (
    <FieldWrapper error={props.error}>
      <TextInput {...props} />
    </FieldWrapper>
  )
}
