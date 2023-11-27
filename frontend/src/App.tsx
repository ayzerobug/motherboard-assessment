import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from './common/Approutes'
import LoginPage from './pages/auth/LoginPage'
import MyHospitalsPage from './pages/app/MyHospitalsPage'

function App() {

  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path={AppRoutes.login} element={<LoginPage />} />
      <Route path={AppRoutes.myHospitals} element={<MyHospitalsPage />} />
    </Routes>
  )
}

export default App
