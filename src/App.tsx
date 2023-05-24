import { RouterProvider } from 'react-router-dom'

import theme from '@Common/muiTheme'
import { ThemeProvider } from '@emotion/react'
import router from './router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
