import { FC, ReactNode, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/hooks'

type Props = {
  children: ReactNode
}

export const AuthGuardRoute: FC<Props> = ({ children }) => {
  const [authChecked, setAuthChecked] = useState(false)
  const { isLoggedIn, getCurrentUser } = useAuth()

  useEffect(() => {
    ;(async () => {
      await getCurrentUser()
      setAuthChecked(true)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (authChecked && !isLoggedIn) {
    return <Navigate to='/login' />
  }
  return <>{children}</>
}
