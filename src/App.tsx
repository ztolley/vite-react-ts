import { BrowserRouter, Route, Routes } from 'react-router-dom'

import theme from '@Common/muiTheme'
import { ThemeProvider } from '@emotion/react'

import { DetailPage, HomePage } from '@Pages'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
