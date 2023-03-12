import { AxiosError, AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'

import { User } from '@/components/model/User/type'
import { axios } from '@/libs/axios'
import { LoginFormValues } from '@/pages/Login/type'
import { SignupFormValues } from '@/pages/Signup/type'
import { useCurrentUserMutators, useCurrentUserState } from '@/states'

export const useAuth = () => {
  const navigate = useNavigate()
  const { setCurrentUser } = useCurrentUserMutators()
  const { currentUser } = useCurrentUserState()

  const isLoggedIn = !!currentUser

  const login = async (values: LoginFormValues): Promise<void> => {
    await axios.post('/v1/user/login', values).then((res: AxiosResponse<User>) => {
      setCurrentUser(res.data)
      navigate('/')
    })
  }

  const signup = async (values: SignupFormValues): Promise<void> => {
    await axios.post('/v1/user', values).then((res: AxiosResponse<User>) => {
      setCurrentUser(res.data)
      navigate('/')
    })
  }

  const getCurrentUser = async (): Promise<void> => {
    await axios
      .get('/v1/user')
      .then((res: AxiosResponse<User>) => {
        setCurrentUser(res.data)
      })
      .catch((err: AxiosError) => {
        console.error(err)
        setCurrentUser(null)
      })
  }

  return {
    login,
    signup,
    getCurrentUser,
    isLoggedIn,
  }
}
