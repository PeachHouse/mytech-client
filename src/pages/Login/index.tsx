/** @jsxImportSource @emotion/react */
import { FC, useEffect } from 'react'
import { css } from '@emotion/react'
import { colors } from '@/constants/colors'
import { Form, InputField } from '@/components/functional/Form'
import { Button } from '@/components/ui/Button'
import { signInSchema } from '@/constants/schema'
import { FiMail } from 'react-icons/all'
import { RiLockPasswordLine } from 'react-icons/all'
import { axios } from '@/libs/axios'

type FormValues = {
  email: string
  password: string
}

type SignInSchema = typeof signInSchema

const styles = {
  container: css`
    padding: 40px;
  `,
  title: css`
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 20px;
  `,
  form: css`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 500px;
  `,
}

export const LoginPage: FC = () => {
  const handleLogin = () => {
    fetch('/v1/user/login').then((res) => console.log(res))
  }
  // useEffect(() => {
  //   fetch('/v1/user/login').then((res) => console.log(res))
  // })
  return (
    <div css={styles.container}>
      <h2 css={styles.title}>Ph Chat</h2>
      <Form<FormValues, SignInSchema>
        schema={signInSchema}
        options={{ mode: 'onChange' }}
        onSubmit={handleLogin}
      >
        {({ register, formState }) => (
          <div css={styles.form}>
            <InputField
              type='text'
              registration={register('email')}
              placeholder='Email Address'
              error={formState.errors.email}
              icon={<FiMail size={25} color='#686d75' />}
              testId='email'
            />
            <InputField
              type='password'
              registration={register('password')}
              placeholder='Password'
              error={formState.errors.password}
              icon={<RiLockPasswordLine size={25} color='#686d75' />}
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
