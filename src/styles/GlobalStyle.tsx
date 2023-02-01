import { FC } from 'react'
import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import { colors } from '@/constants/colors'

const globalStyle = css`
  ${emotionReset}

  input,
  button,
  select,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    border-radius: 0;
    font: inherit;
    outline: none;
  }

  textarea {
    resize: vertical;
  }

  input[type='checkbox'],
  input[type='radio'] input[type='text'] {
    display: none;
  }

  input[type='submit'],
  input[type='button'],
  label,
  button,
  select {
    cursor: pointer;
  }

  select::-ms-expand {
    display: none;
  }

  body {
    color: ${colors.white};
    background-color: ${colors.primary};
    height: 100%;
  }
`

export const GlobalStyle: FC = () => <Global styles={globalStyle} />
