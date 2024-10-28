import { MouseEvent } from 'react'

export const stopDefault = <TEvent extends MouseEvent>(
  cb: (event: TEvent) => void
) => {
  return (event: TEvent) => {
    event.stopPropagation()
    event.preventDefault()
    cb(event)
  }
}
