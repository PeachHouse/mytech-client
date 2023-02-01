import React from 'react'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { Story } from '@storybook/react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story: Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
]
