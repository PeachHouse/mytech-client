import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/Home'
import { LoginPage } from '@/pages/Login'
import { NotFoundPage } from '@/pages/NotFound'
import { SignupPage} from '@/pages/Signup'

export const ROUTING_PATH = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: "/signup",
  NOT_FOUND: '*'
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
  }
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}
