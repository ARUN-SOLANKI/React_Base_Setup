import { PartialRecord } from 'shared/typescript'

import { ERROR_RESPONSE_TYPES } from 'entities/definitions'
import { EntitiesEnKeyExtended } from 'entities/locale'

type ResponseErrorMessage = PartialRecord<
  ERROR_RESPONSE_TYPES,
  Partial<{
    labelTKey: EntitiesEnKeyExtended<'errorEn'>
    descriptionTKey: EntitiesEnKeyExtended<'errorEn'>
  }>
>

export const responseErrorMessages: ResponseErrorMessage = {
  CHAT_NOT_FOUND: {
    labelTKey: 'chatNotFound.label',
    descriptionTKey: 'chatNotFound.description',
  },
  USER_IS_INACTIVE: {
    labelTKey: 'accountInactive.label',
    descriptionTKey: 'accountInactive.description',
  },
}
