/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FC, ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { colors } from '@/constants/colors'

const styles = {
  container: css`
    position: relative;
    border: 3px solid ${colors.lightGray};
    border-radius: 8px;
    padding: 10px;
    height: 100%;
    font-size: 18px;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
  `,
  input: css`
    width: 100%;
    height: 100%;
    padding-left: 10px;
    color: ${colors.primary};

    &::placeholder {
      color: ${colors.gray};
      font-size: 14px;
    }
  `,
}

type TextInputProps = {
  type?: 'text' | 'password'
  registration?: UseFormRegisterReturn
  placeholder?: string
  icon?: ReactNode
  testId?: string
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
