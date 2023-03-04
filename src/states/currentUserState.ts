import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

import { CurrentUser, User } from '@/components/model/User/type'

const currentUserState = atom<CurrentUser>({
  key: 'currentUserState',
  default: {
    currentUser: null,
  },
})

export const useCurrentUserState = (): CurrentUser => {
  return useRecoilValue(currentUserState)
}

export const useCurrentUserMutators = () => {
  const setState = useSetRecoilState(currentUserState)

  const setCurrentUser = useCallback(
    (user: User | null) => setState({ currentUser: user }),
    [setState]
  )

  return { setCurrentUser }
}
