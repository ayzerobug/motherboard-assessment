import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from './common/Approutes'

//App Pages
import * as AppPages from "./pages/app"

//Authentication pages
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'

import { ToastContainer } from "react-toastify";

//Layouts
import AppLayout from './components/layouts/AppLayout';
import AuthLayout from './components/layouts/AuthLayout';

function App() {

  return (
    <div>
      <Routes >
        <Route element={<AuthLayout />}>
          <Route path={AppRoutes.login} element={<LoginPage />} />
          <Route path={AppRoutes.register} element={<RegisterPage />} />
        </Route>


        <Route element={<AppLayout />}>
          <Route path={AppRoutes.appDashboard} element={<AppPages.DashboardPage />} />
          <Route path={AppRoutes.consult} element={<AppPages.ConsultDoctorPage />} />
          <Route path={AppRoutes.appointments} element={<AppPages.AppointmentsPage />} />
          <Route path={AppRoutes.medicalHistory} element={<AppPages.MedicalHistoryPage />} />
          <Route path={AppRoutes.myHospitals} element={<AppPages.MyHospitalsPage />} />
          <Route path={AppRoutes.appSettings} element={<AppPages.SettingsPage />} />
          <Route path={AppRoutes.helpCenter} element={<AppPages.HelpCenterPage />} />
          <Route path={AppRoutes.affiliate} element={<AppPages.AffiliatePage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
