import { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

export const ACCESS_TOKEN = 'x-access-token'
export const REFRESH_TOKEN = 'x-access-refresh-token'
export const USER_ID_TOKEN = 'x-userId'

const loginTokens = [ACCESS_TOKEN, REFRESH_TOKEN, USER_ID_TOKEN] as const

// FIXME: Add as per your API endpoint or get them while creating instance
export const loginEndpoint = 'api/v1/user/login'
export const refreshTokenEndpoint = 'api/v1/user/refresh-token'

export const userSessionActive = (headers: AxiosResponse['headers']) => {
  loginTokens.forEach((tokenName) => {
    // token name are converted to lowercase to match with the headers as they are case-insensitive
    Cookies.remove(tokenName)
    Cookies.set(tokenName, headers[tokenName.toLowerCase()])
  })
}

export const userSessionInactive = () => {
  loginTokens.forEach((tokenName) => {
    Cookies.remove(tokenName)
  })
  window.location.href = '/sign-in'
}

export const getUserId = () => Cookies.get(USER_ID_TOKEN) ?? ''
export const getAccessToken = () => Cookies.get(ACCESS_TOKEN) ?? ''
export const getRefreshToken = () => Cookies.get(REFRESH_TOKEN) ?? ''
