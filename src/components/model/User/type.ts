export type User = {
  id: string
  name: string
  email: string
  password: string
}

export type CurrentUser = {
  currentUser: User | null
}

export type AvatarProps = {
  size: 'small' | 'medium' | 'large'
  src?: string
}
