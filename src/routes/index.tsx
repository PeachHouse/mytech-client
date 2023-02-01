import { LoginPage } from '@/pages/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const ROUTING_PATH = {
  LOGIN: '/login',
}

const router = createBrowserRouter([
  {
    path: ROUTING_PATH.LOGIN,
    element: <LoginPage />,
  },
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}
