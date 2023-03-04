import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

type LoginState = {
  isLoggedInState: boolean
}

const loginState = atom<LoginState>({
  key: 'loginState',
  default: { isLoggedInState: false },
})

export const useLoginState = () => {
  return useRecoilValue(loginState)
}

export const useLoginMutators = () => {
  const setState = useSetRecoilState(loginState)

  const setLoginState = useCallback((isLoggedIn: LoginState) => setState(isLoggedIn), [setState])

  return { setLoginState }
}
