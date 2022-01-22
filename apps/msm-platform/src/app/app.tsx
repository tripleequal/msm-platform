import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import ModuleLoader from '../components/ModuleLoader/ModuleLoader'

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<ModuleLoader />} />
    </Routes>
  )
}

export default App
