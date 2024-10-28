import { useCallback, useEffect, useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { useSnackBar } from 'shared/state'
import { Nullable } from 'shared/typescript'

import { useEntitiesTranslation } from 'entities/locale'
import { responseErrorMessages } from 'entities/model'

import { initQueryClient } from '../query-client'

type Props = {
  readonly children: React.ReactNode
}

export function QueryProvider({ children }: Props) {
  const { show } = useSnackBar()
  const { tEntities } = useEntitiesTranslation('errorEn')

  const [queryClient, setQueryClient] = useState<Nullable<QueryClient>>(null)

  const setQueryClientPersistently = useCallback(() => {
    setQueryClient(
      initQueryClient({
        onError: (err) => {
          const { descriptionTKey, labelTKey } = {
            descriptionTKey: null,
            labelTKey: null,
            ...(err?.type ? responseErrorMessages[err.type] : {}),
          }

          if (labelTKey || descriptionTKey) {
            show.error({
              title: labelTKey ? tEntities(labelTKey) : undefined,
              description: descriptionTKey
                ? tEntities(descriptionTKey)
                : undefined,
            })
          }
        },
      })
    )
  }, [show, tEntities])

  useEffect(() => {
    setQueryClientPersistently()
  }, [setQueryClientPersistently])

  if (!queryClient) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  )
}
