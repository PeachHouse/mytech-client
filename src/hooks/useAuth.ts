import { axios } from '@/libs/axios'
import { LoginFormValues } from '@/pages/Login/LoginPage'
import { useNavigate } from 'react-router-dom'
import { SignupFormValues } from "@/pages/Signup/SignupPage";

export const useAuth = () => {
  const navigate = useNavigate()

  const login = async (values: LoginFormValues): Promise<void> => {
    await axios.post('/v1/user/login', values).then(() => navigate('/'))
  }

  const signup = async (values: SignupFormValues): Promise<void>  => {
    await axios.post('/v1/user', values).then(() => navigate('/'))
  }

  return {
    login,
    signup
  }
}
