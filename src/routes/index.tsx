import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { HomePage, LoginPage, NotFoundPage, SignupPage, SearchPage } from '@/pages'

export const ROUTING_PATH = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  SEARCH: '/search',
  NOT_FOUND: '*',
}

const router = createBrowserRouter([
  {
    path: ROUTING_PATH.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTING_PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTING_PATH.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: ROUTING_PATH.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: ROUTING_PATH.SEARCH,
    element: <SearchPage />,
  },
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}
