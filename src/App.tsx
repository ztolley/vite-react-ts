import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ComponentsPage, DetailPage, HomePage } from '@Pages'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="detail/:id" element={<DetailPage />} />
      <Route path="components" element={<ComponentsPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
