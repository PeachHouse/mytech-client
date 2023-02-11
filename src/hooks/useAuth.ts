import { useNavigate } from 'react-router-dom'

import { axios } from '@/libs/axios'
import { LoginFormValues } from '@/pages/Login/type'
import { SignupFormValues } from '@/pages/Signup/type'

export const useAuth = () => {
  const navigate = useNavigate()

  const login = async (values: LoginFormValues): Promise<void> => {
    await axios.post('/v1/user/login', values).then(() => navigate('/'))
  }

  const signup = async (values: SignupFormValues): Promise<void> => {
    await axios.post('/v1/user', values).then(() => navigate('/'))
  }

  return {
    login,
    signup,
  }
}
