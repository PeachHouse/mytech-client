export type LoginFormValues = {
  email: string
  password: string
}

export type LoginProps = {
  handleLogin: (values: LoginFormValues) => Promise<void>
}
