import { FC, ReactNode } from 'react'

// import useSWR, { SWRConfig } from 'swr'
// import axiosInstance from '@/libs/axiosClinet'
import { GlobalStyle } from '@/styles/GlobalStyle'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    // <SWRConfig value={{ fetcher: (url) => axiosInstance(url).then((res) => res.json()) }}>
    <>
      <GlobalStyle />
      {children}
    </>
    // </SWRConfig>
  )
}
