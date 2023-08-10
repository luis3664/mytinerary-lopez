import './App.css'
import LayoutMain from './layouts/LayoutMain/LayoutMain'
import Home from './pages/Home/Home'
import Cities from './pages/Cities/Cities'
import Error404 from './pages/Error404/Error404'
import CitieFull from './pages/CitieFull/CitieFull'
import Login from './pages/Login/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <LayoutMain />,
    children: [
      {
        path:'/',
        element: <Home />
      },{
        path:'/cities',
        element: <Cities />
      },{
        path:'/citie/:id',
        element: <CitieFull />
      },{
        path:'/login',
        element: <Login />
      },{
        path:'*',
        element: <Error404 />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
