import { getTranslation } from 'shared/utils'

import { sharedEn } from './en'

export const SHARED_KEY = 'shared'

export { sharedEn }

export type SharedTranslation = typeof sharedEn

export const useSharedTranslation = getTranslation('tShared', SHARED_KEY)
