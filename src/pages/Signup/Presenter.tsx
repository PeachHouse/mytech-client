/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FC } from 'react'
import { FiMail, AiOutlineUser, RiLockPasswordLine } from 'react-icons/all'

import { Form, InputField, signupSchema } from '@/components/functional/Form'
import { Button } from '@/components/ui'
import { SignupFormValues, SignupProps } from '@/pages/Signup/type'
import { fadeIn } from '@/styles/animation/fadeIn'
import { colors } from '@/styles/colors'

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

export const Presenter: FC<SignupProps> = ({ handleSignup }) => {
  return (
    <div css={styles.container}>
      <h2 css={styles.title}>Welcome...</h2>
      <p css={styles.text}>Please enter your name, email and password</p>
      <Form<SignupFormValues>
        schema={signupSchema}
        options={{ mode: 'onBlur' }}
        onSubmit={handleSignup}
      >
        {({ register, formState }) => (
          <div css={styles.form}>
            <InputField
              type='text'
              registration={register('name')}
              placeholder={'Name'}
              error={formState.errors.name}
              icon={<AiOutlineUser size={25} color={colors.gray} />}
              testId='name'
            />
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
            <Button color='primary' disabled={!formState.isValid}>
              Sign Up
            </Button>
          </div>
        )}
      </Form>
    </div>
  )
}
