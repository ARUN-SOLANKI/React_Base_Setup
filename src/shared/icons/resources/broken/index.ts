import Microphone from './assets/microphone.svg'

export const brokenIcons = {
  Microphone,
} as const

export type BrokenIconName = keyof typeof brokenIcons
