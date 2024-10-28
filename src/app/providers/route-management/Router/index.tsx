import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'

import { appPaths } from 'entities/config'

import {
  AccountPage,
  DeveloperPage,
  SignInPage,
  SignUpPage,
  DashboardPage,
} from 'pages/components'

import { AuthLayout, DashboardLayout, MainLayout, RootLayout } from 'app/layout'

import { RouteGuard } from '../RouteGuard'

function NotAvailable() {
  return <>Not Available</>
}

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route
        path={appPaths.home}
        element={<Navigate to={appPaths.dashboard} />}
      />

      <Route element={<MainLayout />}>
        <Route element={<DashboardLayout />}>
          <Route
            path={appPaths.developerPage}
            element={
              <RouteGuard>
                <DeveloperPage />
              </RouteGuard>
            }
          />

          <Route
            path={appPaths.dashboard}
            element={
              <RouteGuard>
                <DashboardPage />
              </RouteGuard>
            }
          />

          <Route
            path={appPaths.account}
            element={
              <RouteGuard privateRoute>
                <AccountPage />
              </RouteGuard>
            }
          />

          <Route path="*" element={<NotAvailable />} />
        </Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route
          path={appPaths.signIn}
          element={
            <RouteGuard authRoute>
              <SignInPage />
            </RouteGuard>
          }
        />
        <Route
          path={appPaths.signUp}
          element={
            <RouteGuard authRoute>
              <SignUpPage />
            </RouteGuard>
          }
        />
      </Route>
    </Route>
  )
)

export default Router
