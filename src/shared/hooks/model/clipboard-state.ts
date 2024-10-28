import { useCallback, useRef } from 'react'

type Args = {
  onSuccess?: () => void
}

export function useClipboardState(args: Args) {
  // Create a ref to the input field
  const ref = useRef<HTMLInputElement | null>(null)

  const copyToClipboard = useCallback(() => {
    // Copy the input field's value to the clipboard
    if (ref.current) {
      ref.current.select()
      document.execCommand('copy') // Older method, works with selected text
      // document.execCommand('copy', false, ref.current.value) // Newer method, works with images
      // Alternatively using Clipboard API:
      navigator.clipboard
        .writeText(ref.current.value)
        .then(() => {
          args.onSuccess?.()
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err)
        })
    }
  }, [args])

  return { copyToClipboard, ref }
}
