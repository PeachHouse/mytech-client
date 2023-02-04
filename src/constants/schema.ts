import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, '必須入力です').email('メールアドレスの形式で入力してください'),
  password: z.string().min(1, '必須入力です').length(8, 'パスワードはちょうど８文字にしてください')
})

export const signupSchema = z.object({
  name: z.string().min(1, '必須入力です').max(50, '名前は50文字以内で入力してください'),
  email: z.string().min(1, '必須入力です').email('メールアドレスの形式で入力してください'),
  password: z.string().min(1, '必須入力です').length(8, 'パスワードはちょうど８文字にしてください')
})
