import { useEffect } from 'react'

export const useTriggerCb = (
  cb: (value?: boolean) => void,
  value: boolean | undefined,
  onTrue = true
) => {
  useEffect(() => {
    if (value === onTrue) {
      cb(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
}
