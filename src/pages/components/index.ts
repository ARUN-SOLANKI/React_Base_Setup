import { lazy } from 'react'

export const HomePage = lazy(async () => {
  const { HomePage } = await import('./home')
  return { default: HomePage }
})

export const DashboardPage = lazy(async () => {
  const { DashboardPage } = await import('./dashboard')
  return { default: DashboardPage }
})

export const SignInPage = lazy(async () => {
  const { SignInPage } = await import('./sign-in')
  return { default: SignInPage }
})

export const SignUpPage = lazy(async () => {
  const { SignUpPage } = await import('./sign-up')
  return { default: SignUpPage }
})

export const AccountPage = lazy(async () => {
  const { AccountPage } = await import('./account')
  return { default: AccountPage }
})

export const DeveloperPage = lazy(async () => {
  const { DeveloperPage } = await import('./developer')
  return { default: DeveloperPage }
})
