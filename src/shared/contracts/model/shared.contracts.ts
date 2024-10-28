import { ForceAny } from 'shared/typescript'

export type Content = {
  title: string
  description?: string
}

export type SuccessErrorCb = {
  onError(err?: ForceAny): void
  onSuccess(res?: ForceAny): void
}
