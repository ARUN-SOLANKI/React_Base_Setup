import {
  createContext,
  MutableRefObject,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'

import { ExtractKeys, Noop } from 'shared/typescript'

export type AppState = {
  isSideNavOpen: boolean
  newChatId: string
}

type BooleanStateKey = ExtractKeys<AppState, boolean>

type AppContextType = AppState & {
  toggleAppState: (key: BooleanStateKey, value?: boolean) => void
  updateAppState: (mode: Partial<AppState>) => void
  closeDashboardModal: Noop
  mainRef: MutableRefObject<HTMLDivElement | null>
}

const defaultState: AppState = {
  isSideNavOpen: true,
  newChatId: '',
}

const AppContext = createContext<AppContextType>({
  ...defaultState,
  toggleAppState: () => {},
  updateAppState: () => {},
  closeDashboardModal: () => {},

  mainRef: { current: null },
})

export const useAppState = () => useContext(AppContext)

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLDivElement | null>(null)

  const [AppState, setAppState] = useState<AppState>({
    ...defaultState,
  })

  const updateAppState = useCallback((mode: Partial<AppState>) => {
    setAppState((prev) => ({ ...prev, ...mode }))
  }, [])

  const toggleAppState = useCallback(
    (key: BooleanStateKey, value?: boolean) => {
      setAppState((prev) => ({
        ...prev,
        [key]: value !== undefined ? value : !prev[key],
      }))
    },
    []
  )

  const closeDashboardModal = useCallback(() => {
    setAppState((prev) => ({
      ...prev,
      selectedModal: null,
    }))
  }, [])

  const AppContextValue = useMemo(
    () =>
      ({
        ...AppState,
        updateAppState,
        toggleAppState,
        closeDashboardModal,

        mainRef,
      }) as AppContextType,
    [AppState, closeDashboardModal, toggleAppState, updateAppState]
  )

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  )
}
