import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import { Toaster } from '@/components/ui/toaster'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import { PATHS } from '@/utils/enums'
import SlideBar from './components/common/SlideBar'
import Balance from './pages/Balance'
import CreateWallet from './pages/CreateWallet'
import History from './pages/History'
import Login from './pages/Login'
import Register from './pages/Register'

export default function Router() {
  const Layout = () => {
    return (
      <div className='flex'>
        <Toaster />
        <SlideBar />
        <div className='flex flex-col w-full ml-[300px]'>
          <div className='p-10'>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = localStorage.getItem('access_token')

    if (!token) {
      return (
        <Navigate
          to='/login'
          replace
        />
      )
    }

    return children
  }

  const routerElements = useRoutes([
    {
      path: PATHS.HOME,
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: PATHS.CREATE_WALLET,
          element: <CreateWallet />,
        },
        {
          path: PATHS.BALANCE,
          element: <Balance />,
        },
        {
          path: PATHS.HISTORY,
          element: <History />,
        },
      ],
    },
    {
      path: PATHS.LOGIN,
      element: <Login />,
    },
    {
      path: PATHS.REGISTER,
      element: <Register />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])

  return routerElements
}
