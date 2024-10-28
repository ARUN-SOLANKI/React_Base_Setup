import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { Box, Button, Divider } from '@mui/material'

import { ModalHOC } from 'shared/hoc'
import { useSharedTranslation } from 'shared/locale'
import { Noop } from 'shared/typescript'

export type ConfirmationModalOptions = {
  title: string
  description: string
  ctaText: string
  loading?: boolean
  mode?: 'Alert' | 'Confirmation'
}

type ConfirmationModalState = ConfirmationModalOptions & {
  open: boolean
  onConfirm: Noop
}

const defaultModalState: ConfirmationModalState = {
  open: false,
  title: '',
  description: '',
  ctaText: '',
  loading: false,
  mode: 'Confirmation',
  onConfirm: () => {},
}

type ConfirmationModalContextType = {
  askConfirmation: (cb: Noop, options: ConfirmationModalOptions) => void
  showLoading: (yes?: boolean) => void
  confirmed: (text?: string) => void
}

const ConfirmationModalContext = createContext<
  ConfirmationModalContextType | undefined
>(undefined)

export const useConfirmationModal = () => {
  const context = useContext(ConfirmationModalContext)

  if (!context) {
    throw new Error(
      'useConfirmationModal must be used within a ConfirmationModalProvider'
    )
  }

  return context
}

type ConfirmationModalProviderProps = {
  children: ReactNode
}

export function ConfirmationModalProvider({
  children,
}: ConfirmationModalProviderProps) {
  const { tShared } = useSharedTranslation()

  const [confirmationModalState, setConfirmationModalState] =
    useState<ConfirmationModalState>({
      ...defaultModalState,
    })

  const askConfirmation = useCallback(
    (onConfirm: Noop, options: ConfirmationModalOptions) => {
      setConfirmationModalState({ open: true, onConfirm, ...options })
    },
    []
  )

  const handleClose = useCallback(() => {
    setConfirmationModalState(defaultModalState)
  }, [])

  const showLoading = useCallback((yes = true) => {
    setConfirmationModalState((prev) => ({ ...prev, loading: yes }))
  }, [])

  const confirmed = useCallback(
    (text = '') => {
      handleClose()
      // TODO: Show notification
      if (text) alert(text)
    },
    [handleClose]
  )

  const contextValue = useMemo(() => {
    return { askConfirmation, showLoading, confirmed }
  }, [askConfirmation, showLoading, confirmed])

  return (
    <ConfirmationModalContext.Provider value={contextValue}>
      {children}

      <ModalHOC
        open={confirmationModalState.open}
        title={confirmationModalState.title}
        description={confirmationModalState.description}
        onClose={handleClose}
        renderContent={({ closeModal }) => {
          return (
            <Box>
              <Divider />
              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  justifyContent: 'end',
                  gap: 2,
                }}
              >
                <Button variant="outlined" onClick={closeModal}>
                  {tShared('action.cancel')}
                </Button>
                <Button
                  color={
                    confirmationModalState.mode === 'Alert'
                      ? 'error'
                      : 'primary'
                  }
                  onClick={confirmationModalState.onConfirm}
                  loading={confirmationModalState.loading}
                  disabled={confirmationModalState.loading}
                >
                  {confirmationModalState.ctaText}
                </Button>
              </Box>
            </Box>
          )
        }}
      />
    </ConfirmationModalContext.Provider>
  )
}
