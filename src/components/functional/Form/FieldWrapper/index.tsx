/** @jsxImportSource @emotion/react */
import { FieldError } from 'react-hook-form'
import { css } from '@emotion/react'
import { colors } from '@/constants/colors'
import { FC } from 'react'

type FieldWrapperProps = {
  label?: string
  className?: string
  children: React.ReactNode
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
