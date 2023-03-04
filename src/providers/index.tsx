import { FC, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

import { GlobalStyle } from '@/styles/GlobalStyle'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      {children}
    </RecoilRoot>
  )
}
