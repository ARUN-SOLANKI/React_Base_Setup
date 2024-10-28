import Cross from './assets/cross.svg?react'
import DocumentText from './assets/document-text.svg?react'
import DocumentTextOutline from './assets/document.svg?react'
import Message from './assets/message.svg?react'
import Microphone from './assets/microphone.svg?react'
import TickCircle from './assets/tick-circle.svg?react'

export const outlineIcons = {
  DocumentText,
  DocumentTextOutline,
  Message,
  Microphone,
  TickCircle,
  Cross,
} as const

export type OutlineIconName = keyof typeof outlineIcons
