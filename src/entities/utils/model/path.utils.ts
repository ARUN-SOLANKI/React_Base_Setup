import { PartialRecord } from 'shared/typescript'

import {
  appPathParams,
  AppPathParamsName,
  appPaths,
  AppPathsName,
  ExtAppRoutes,
  extPaths,
} from 'entities/config'

export const getAppPath = (
  path: AppPathsName,
  params?: PartialRecord<AppPathParamsName, string>
): string => {
  return Object.entries(params ?? []).reduce((path, [key, value]) => {
    return path.replace(`:${appPathParams[key as AppPathParamsName]}`, value)
  }, appPaths[path] as string)
}

export const navigateToMarketingWebsite = (
  pathName: ExtAppRoutes<'marketingWebsite'>
) => {
  const marketingWebsitePath = extPaths.marketingWebsite
  const BASE_URL = marketingWebsitePath.baseUrl
  const route = marketingWebsitePath.route[pathName]
  window.location.href = `${BASE_URL}${route}`
}
