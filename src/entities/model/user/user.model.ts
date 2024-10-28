export type UserTypes = 'PREMIUM' | 'STANDARD' | 'BASIC'

export type User = {
  id: string // FIXME: UUID
  name: string
  type: UserTypes
}
