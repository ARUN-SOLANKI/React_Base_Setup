import { ReactNode } from 'react'

import { Navigate, useLocation } from 'react-router-dom'

import { ExclusiveProperty } from 'shared/typescript'

import { appPaths } from 'entities/config'
import { useUserSession } from 'entities/state'

type Props = { children: ReactNode } & Partial<
  ExclusiveProperty<{
    privateRoute: boolean
    authRoute: boolean
  }>
>

export function RouteGuard({ privateRoute, authRoute, children }: Props) {
  const { isLoggedIn } = useUserSession()

  const path = useLocation()
  const { state } = path

  if (privateRoute && !isLoggedIn) {
    return (
      <Navigate to={appPaths.signIn} state={{ redirectUrl: path }} replace />
    )
  }

  if (authRoute && isLoggedIn) {
    return <Navigate to={state?.redirectUrl ?? appPaths.dashboard} replace />
  }

  return children
}
