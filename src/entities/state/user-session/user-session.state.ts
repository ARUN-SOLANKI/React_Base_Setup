import { useMemo } from 'react'

import { USER_ID_TOKEN } from 'shared/data-providers'
import { useLocalState } from 'shared/hooks'

type UserSessionData = {
  id: string
  name: string
}

export const useUserSession = () => {
  const [isLoggedIn] = useLocalState(USER_ID_TOKEN, '', 'cookie')

  const userData = useMemo(
    () =>
      ({
        id: '213',
        name: 'John Doe',
      }) as UserSessionData,
    []
  )

  return {
    isLoggedIn: !!isLoggedIn,
    user: userData,
  }
}
