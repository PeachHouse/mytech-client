import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/components/ui/Layout/Layout'
import { HomePage, LoginPage, NotFoundPage, SignupPage, SearchPage } from '@/pages'
import { AuthGuardRoute } from '@/routes/AuthGuardRoute'

export const ROUTING_PATH = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  SEARCH: '/search',
  NOT_FOUND: '*',
} as const

const router = createBrowserRouter([
  {
    path: ROUTING_PATH.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: ROUTING_PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTING_PATH.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: ROUTING_PATH.HOME,
    element: (
      <AuthGuardRoute>
        <Layout />
      </AuthGuardRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTING_PATH.SEARCH,
        element: <SearchPage />,
      },
    ],
  },
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}
