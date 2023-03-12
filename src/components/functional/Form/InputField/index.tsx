import { FC } from 'react'
import { FieldError } from 'react-hook-form'

import { FieldWrapper } from '@/components/functional/Form'
import { TextInput, TextInputProps } from '@/components/ui'

type InputFieldProps = TextInputProps & {
  error?: FieldError
}

export const InputField: FC<InputFieldProps> = (props) => {
  return (
    <FieldWrapper error={props.error}>
      <TextInput {...props} />
    </FieldWrapper>
  )
}
