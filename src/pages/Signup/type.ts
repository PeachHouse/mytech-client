export type SignupFormValues = {
  name: string
  email: string
  password: string
}

export type SignupProps = {
  handleSignup: (values: SignupFormValues) => Promise<void>
}
