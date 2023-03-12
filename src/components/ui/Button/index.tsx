/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentProps, FC } from 'react'

import { Loading } from '@/components/ui'
import { colors } from '@/styles/colors'

const buttonStyles = css`
  width: 100%;
  padding: 20px;
  font-size: 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;

  &[data-color='primary'] {
    border: 1px solid ${colors.purple};
    background-color: ${colors.purple};
    color: ${colors.white};
    &:hover {
      opacity: 0.7;
    }
  }

  &[data-color='primary']:disabled {
    pointer-events: none;
    border: 1px solid ${colors.lightGray};
    background-color: ${colors.lightGray};
    color: ${colors.white};
  }
`

type ButtonProps = ComponentProps<'button'> & {
  color: 'primary'
  isLoading?: boolean
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { isLoading, ...buttonProps } = props
  return (
    <button {...buttonProps} css={buttonStyles} data-color={props.color} disabled={props.disabled}>
      {isLoading && <Loading />}
      {props.children}
    </button>
  )
}
