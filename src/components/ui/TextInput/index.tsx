/** @jsxImportSource @emotion/react */
import { FC, ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { css } from '@emotion/react'
import { colors } from '@/constants/colors'

type TextInputProps = {
  type?: 'text' | 'password'
  registration?: UseFormRegisterReturn
  placeholder?: string
  icon?: ReactNode
  testId?: string
}

const styles = {
  container: css`
    position: relative;
    border: 1px solid ${colors.secondary};
    border-radius: 4px;
    padding: 10px;
    height: 100%;
    font-size: 18px;
    background-color: ${colors.secondary};
    display: flex;
    align-items: center;
  `,
  input: css`
    width: 100%;
    height: 100%;
    padding-left: 10px;
    color: ${colors.white};

    &::placeholder {
      color: ${colors.gray};
    }
  `,
}

export const TextInput: FC<TextInputProps> = ({
  type = 'text',
  registration,
  placeholder,
  icon,
  testId,
}) => {
  return (
    <div css={styles.container}>
      {icon && icon}
      <input
        css={styles.input}
        type={type}
        placeholder={placeholder}
        autoComplete='off'
        data-testid={testId}
        {...registration}
      />
    </div>
  )
}
