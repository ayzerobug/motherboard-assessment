import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppRoutes } from './common/Approutes'
import LoginPage from './pages/auth/LoginPage'
import MyHospitalsPage from './pages/app/MyHospitalsPage'
import DashboardPage from './pages/app/DashboardPage'
import ConsultDoctorPage from './pages/app/ConsultDoctorPage'
import AppointmentsPage from './pages/app/AppointmentsPage'
import MedicalHistoryPage from './pages/app/MedicalHistoryPage'
import SettingsPage from './pages/app/SettingsPage'
import HelpCenterPage from './pages/app/HelpCenterPage'
import AffiliatePage from './pages/app/AffiliatePage'
import RegisterPage from './pages/auth/RegisterPage'
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes >
          {/* <Route path="/" element={<Home />} /> */}
          <Route path={AppRoutes.login} element={<LoginPage />} />
          <Route path={AppRoutes.register} element={<RegisterPage />} />


          {/* Protected Routes */}
          <Route path={AppRoutes.appDashboard} element={<DashboardPage />} />
          <Route path={AppRoutes.consult} element={<ConsultDoctorPage />} />
          <Route path={AppRoutes.appointments} element={<AppointmentsPage />} />
          <Route path={AppRoutes.medicalHistory} element={<MedicalHistoryPage />} />
          <Route path={AppRoutes.myHospitals} element={<MyHospitalsPage />} />
          <Route path={AppRoutes.appSettings} element={<SettingsPage />} />
          <Route path={AppRoutes.helpCenter} element={<HelpCenterPage />} />
          <Route path={AppRoutes.affiliate} element={<AffiliatePage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App
