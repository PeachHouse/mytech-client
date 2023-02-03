/** @jsxImportSource @emotion/react */
import { FC, ReactNode } from 'react'
import { css } from '@emotion/react'
import { colors } from '@/constants/colors'

type ButtonProps = {
  color: 'primary'
  children: ReactNode
  disabled?: boolean
}

const buttonStyles = css`
  width: 100%;
  padding: 20px;
  font-size: 18px;
  border-radius: 8px;

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

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button {...props} css={buttonStyles} data-color={props.color} disabled={props.disabled}>
      {props.children}
    </button>
  )
}
