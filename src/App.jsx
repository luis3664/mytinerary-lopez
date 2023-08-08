import './App.css'
import LayoutMain from './layouts/LayoutMain'
import Home from './pages/Home/home'
import Cities from './pages/Cities/Cities'
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
        path:'*',
        element: <Home />
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
