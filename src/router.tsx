import { createBrowserRouter } from 'react-router-dom'
import { DetailPage, ErrorPage, HomePage } from '@Pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'detail/:id',
    element: <DetailPage />,
  },
])

export default router
