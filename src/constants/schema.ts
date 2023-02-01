import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().min(1, '必須入力です').email('メールアドレスの形式で入力してください'),
  password: z.string().min(1, '必須入力です').max(50),
})
