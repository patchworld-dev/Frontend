import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MissionPage from '../pages/MissionPage'
import ZonePage from '../pages/ZonePage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zone" element={<ZonePage />} />
        <Route path="/mission" element={<MissionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
