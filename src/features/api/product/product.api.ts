import { IClient, getClient } from 'shared/data-providers'

import { ProductsResponse } from '../../model'

export class ProductAPI {
  private client: IClient

  constructor(client: IClient) {
    this.client = client
  }

  async getProducts(params = { limit: 5 }) {
    return this.client.get<ProductsResponse>('', { params })
  }

  async getProductById(productID: string) {
    return this.client.get<ProductsResponse>(productID)
  }
}

export const productApi = new ProductAPI(getClient('products'))
