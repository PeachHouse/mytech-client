import { FC, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { useAuth } from '@/hooks'
import { Presenter } from '@/pages/Signup/Presenter'
import { SignupFormValues } from '@/pages/Signup/type'

export const SignupPage: FC = () => {
  const { signup } = useAuth()
  const handleSignup = async (values: SignupFormValues) => {
    signup(values)
  }
  return (
    <ErrorBoundary fallback={<p>An Error Occurred</p>}>
      <Suspense fallback={<p>loading...</p>}>
        <Presenter handleSignup={handleSignup} />
      </Suspense>
    </ErrorBoundary>
  )
}
