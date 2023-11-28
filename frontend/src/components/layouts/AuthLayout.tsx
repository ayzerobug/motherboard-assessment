import logo from "../../assets/images/logo.png";
import icon from "../../assets/images/icon.png";
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="auth-bg-pattern bg-primary-100 flex flex-col justify-center items-center h-screen">
            <img src={logo} alt="Logo" className='mb-10' />
            <Outlet />
            <div className='flex items-center gap-x-2 absolute bottom-4'>
                <img src={icon} alt="Wavetech Icon" className='w-6 h-6' />
                <p className='text-sm'>Powered by <span className='font-bold'>wavehealth</span></p>
            </div>
        </div>
    )
}


// bg-primary-100

export default AuthLayout