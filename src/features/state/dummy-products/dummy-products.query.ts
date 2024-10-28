import { useQuery } from '@tanstack/react-query'

import { ErrorResponse } from 'entities/definitions'

import { productApi } from 'features/api'
import { ProductsResponse } from 'features/model'

export const DummyProductQueryKey = 'dummy-products-query'

export const useDummyProductsQuery = () => {
  return useQuery<ProductsResponse, ErrorResponse>({
    queryKey: [DummyProductQueryKey],
    queryFn: async () => {
      const response = await productApi.getProducts({ limit: 8 })
      return response.data
    },
  })
}
