import { Suspense } from 'react'

import { Loader } from 'shared/components'
import { ConfirmationModalProvider, SnackBarProvider } from 'shared/state'

import { AppStateProvider } from 'entities/state'

import {
  QueryProvider,
  RouterProvider,
  ThemeProvider,
  I18nProvider,
} from './providers'

import './App.css'

function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <SnackBarProvider>
          <ConfirmationModalProvider>
            <QueryProvider>
              <AppStateProvider>
                <Suspense fallback={<Loader fullView loading />}>
                  <RouterProvider />
                </Suspense>
              </AppStateProvider>
            </QueryProvider>
          </ConfirmationModalProvider>
        </SnackBarProvider>
      </ThemeProvider>
    </I18nProvider>
  )
}

export default App
