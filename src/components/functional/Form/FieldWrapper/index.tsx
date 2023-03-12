/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FC, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

import { colors } from '@/styles/colors'

type FieldWrapperProps = {
  children: ReactNode
  label?: string
  error?: FieldError | undefined
}

const styles = {
  contents: css`
    margin-bottom: 20px;
  `,
  error: css`
    color: ${colors.red};
    text-align: left;
    margin-top: 10px;
    font-size: 12px;
  `,
}

export const FieldWrapper: FC<FieldWrapperProps> = ({ error, children }) => {
  return (
    <div css={styles.contents}>
      {children}
      {error?.message && (
        <p role='alert' aria-label={error.message} css={styles.error}>
          {error.message}
        </p>
      )}
    </div>
  )
}
