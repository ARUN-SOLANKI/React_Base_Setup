import { getTranslation } from 'shared/utils'

export const APP_KEY = 'app'

export { appEn } from './en'

export const useAppTranslation = getTranslation('tApp', APP_KEY)
