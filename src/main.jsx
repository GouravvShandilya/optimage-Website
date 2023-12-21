import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Aboutus from './pages/Aboutus.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Aboutus/> ,

      },
      {
        path: "/login",
        element: <Aboutus/>,

      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>
  <App />
  </RouterProvider>
)
