import { FC } from 'react'
import { FieldWrapper } from '@/components/functional/Form'
import { UseFormRegisterReturn, FieldError } from 'react-hook-form'
import { TextInput } from '@/components/ui/TextInput'
import { ReactNode } from 'react'

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
