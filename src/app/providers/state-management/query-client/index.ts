import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'

import { ErrorResponse } from 'entities/definitions'
import { NetworkErrorResponse } from 'entities/definitions/model/network.types'

type Args = {
  onError: (err?: NetworkErrorResponse) => void
}

export function initQueryClient({ onError }: Args): QueryClient {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        const errorData = (error as ErrorResponse).response?.data
        onError(errorData)
        console.error('global query err', error)
        return error
      },
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        const errorData = (error as ErrorResponse).response?.data
        onError(errorData)
        console.error('global mutation err', error)
        return error
      },
    }),
    defaultOptions: {
      queries: {
        retry: false, // Set to true to retry failed queries
        staleTime: Infinity,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: false,
      },
    },
  })
}
