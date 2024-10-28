export const appPathParams = {
  chatId: 'chat-id',
  conversationId: 'conversation-id',
} as const

export const appPaths = {
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  dashboard: '/dashboard',
  documents: '/documents',
  account: '/account',
  chart: '/chart',
  book: '/book',
  help: '/help',
  developerPage: '/developer-page',
} as const

export type AppPaths = typeof appPaths
export type AppPathParams = typeof appPathParams

export type AppPathsName = keyof AppPaths
export type AppPathParamsName = keyof AppPathParams

export type AppSearchParamsName = string // REMARKS: To be added when requirements are clear

export type AppRouteStateValue = {
  anyState: boolean // REMARKS: Update this for state key
}

// ------------------ External App Paths ----------------

type ExternalPath = Record<
  string,
  {
    baseUrl: string
    route: Record<string, string>
  }
>

export const marketingWebsiteBaseUrl = import.meta.env
  .REACT_APP_MARKETING_WEBSITE_URL

export const extPaths = {
  marketingWebsite: {
    baseUrl: marketingWebsiteBaseUrl ?? '',
    route: {
      login: '/login',
      pricing: '/pricing',
    },
  },
} satisfies ExternalPath

export type ExtAppPaths = typeof extPaths
export type ExtAppNames = keyof ExtAppPaths
export type ExtAppRoutes<T extends ExtAppNames> = keyof ExtAppPaths[T]['route']
