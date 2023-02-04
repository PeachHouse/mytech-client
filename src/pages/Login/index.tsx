/** @jsxImportSource @emotion/react */
import { FC, Suspense } from 'react'
import { css } from '@emotion/react'
import { colors } from '@/constants/colors'
import { Form, InputField } from '@/components/functional/Form'
import { Button } from '@/components/ui/Button'
import { loginSchema } from '@/constants/schema'
import { FiMail } from 'react-icons/all'
import { RiLockPasswordLine } from 'react-icons/all'
import { fadeIn } from '@/styles/keyframes/fadeIn'
import { ErrorBoundary } from 'react-error-boundary'
import { LoginFormValues, LoginProps } from './LoginPage'
import { useAuth } from '@/hooks/useAuth'

const styles = {
  container: css`
    padding: 40px 120px 120px 120px;
    height: fit-content;
    inset: 0;
    background-color: ${colors.white};
    max-width: 500px;
    margin: auto;
    border-radius: 100px;
    position: fixed;
    animation-name: ${fadeIn};
    animation-duration: 1s;
    animation-timing-function: ease-out;
  `,
  title: css`
    font-size: 24px;
    font-weight: bold;
    color: ${colors.darkPurple};
    margin-bottom: 10px;
  `,
  text: css`
    color: ${colors.gray};
    margin-bottom: 50px;
  `,
  form: css`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 500px;
  `,
}

const Presentation: FC<LoginProps> = ({ handleLogin }) => {
  return (
    <div css={styles.container}>
      <h2 css={styles.title}>Welcome Back...</h2>
      <p css={styles.text}>Please enter your email and password</p>
      <Form<LoginFormValues>
        schema={loginSchema}
        options={{ mode: 'onBlue' }}
        onSubmit={handleLogin}
      >
        {({ register, formState }) => (
          <div css={styles.form}>
            <InputField
              type='text'
              registration={register('email')}
              placeholder='Email Address'
              error={formState.errors.email}
              icon={<FiMail size={25} color={colors.gray} />}
              testId='email'
            />
            <InputField
              type='password'
              registration={register('password')}
              placeholder='Password'
              error={formState.errors.password}
              icon={<RiLockPasswordLine size={25} color={colors.gray} />}
              testId='password'
            />
            <Button color='primary' disabled={!formState.isValid || !formState.isDirty}>
              Sign In
            </Button>
          </div>
        )}
      </Form>
    </div>
  )
}

export const LoginPage: FC = () => {
  const { login } = useAuth()
  const handleLogin = async (values: LoginFormValues) => {
    login(values)
  }
  return (
    <ErrorBoundary fallback={<p>An Error Occurred</p>}>
      <Suspense fallback={<p>loading...</p>}>
        <Presentation handleLogin={handleLogin} />
      </Suspense>
    </ErrorBoundary>
  )
}
