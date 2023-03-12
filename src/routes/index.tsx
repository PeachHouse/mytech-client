import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/components/ui/Layout'
import { HomePage, LoginPage, SignupPage, SearchPage, NotFoundPage } from '@/pages'

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
    path: ROUTING_PATH.HOME,
    element: (
      // <AuthGuardRoute>
      <Layout />
      // </AuthGuardRoute>
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
  {
    path: ROUTING_PATH.NOT_FOUND,
    element: <NotFoundPage />,
  },
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}
