/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FC, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

import { colors } from '@/constants/colors'

type FieldWrapperProps = {
  label?: string
  className?: string
  children: ReactNode
  error?: FieldError | undefined
  description?: string
}

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>

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
