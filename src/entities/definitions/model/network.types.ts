import { AxiosError } from 'axios'

export enum ERROR_RESPONSE_TYPES {
  ConfigNotPreset = 'CONFIG_NOT_PRESENT',
  ConfigNotFound = 'CONFIG_NOT_FOUND',
  InvalidData = 'INVALID_DATA',
  ChatNotFound = 'CHAT_NOT_FOUND',
  ConversationNotFound = 'CONVERSATION_NOT_FOUND',
  MessageNotFound = 'MESSAGE_NOT_FOUND',
  UserNotFound = 'USER_NOT_FOUND',
  UserInactive = 'USER_IS_INACTIVE',
  ConnectionFailed = 'CONNECTION_FAILED',
  DatabaseOperationFailed = 'DATABASE_OPERATION_FAILED',
  ChatIdRequired = 'CHAT_ID_REQUIRED',
  ConfigAlreadyExists = 'CONFIG_ALREADY_PRESENT',
}

export type ErrorResponseCode = `DIGI_LAWYER_${number}`

export type NetworkErrorResponse = {
  code: ErrorResponseCode
  message: string
  debugId: string
  type: ERROR_RESPONSE_TYPES
}

export type ErrorResponse = AxiosError<NetworkErrorResponse>
