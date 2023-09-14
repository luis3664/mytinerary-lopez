import './App.css'
import LayoutMain from './layouts/LayoutMain/LayoutMain'
import Home from './pages/Home/Home'
import Cities from './pages/Cities/Cities'
import Error404 from './pages/Error404/Error404'
import CityFull from './pages/CityFull/CityFull'
import Login from './pages/Login/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setUser } from './redux/actions/usersAction'
import ProtectedRoute from '../utils/ProtectedRouter'


const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: '/cities',
        element: <Cities />
      }, {
        path: '/city/:id',
        element: <CityFull />
      }, {
        path: '/login',
        element: <ProtectedRoute> <Login/> </ProtectedRoute>
      }, {
        path: '*',
        element: <Error404 />
      }
    ]
  }
],)

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser());
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
