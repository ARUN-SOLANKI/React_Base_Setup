import SendSquare from './assets/send-square.svg?react'

export const solidIcons = {
  SendSquare,
} as const

export type SolidIconName = keyof typeof solidIcons
