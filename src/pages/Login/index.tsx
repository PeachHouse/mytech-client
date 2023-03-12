import { FC, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { useAuth } from '@/hooks'
import { Presenter } from '@/pages/Login/Presenter'
import { LoginFormValues } from '@/pages/Login/type'

export const LoginPage: FC = () => {
  const { login } = useAuth()
  const handleLogin = async (values: LoginFormValues) => {
    login(values)
  }
  return (
    <ErrorBoundary fallback={<p>An Error Occurred</p>}>
      <Suspense fallback={<p>loading...</p>}>
        <Presenter handleLogin={handleLogin} />
      </Suspense>
    </ErrorBoundary>
  )
}
