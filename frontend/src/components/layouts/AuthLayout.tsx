import { ReactNode } from 'react';
import logo from "../../assets/images/logo.png";
import { Icon } from '@iconify/react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="auth-bg-pattern bg-primary-100 flex flex-col justify-center items-center h-screen">
            <img src={logo} alt="Logo" className='mb-10' />
            {children}
            <div className='flex items-center gap-x-2 absolute bottom-4'>
                <Icon icon="wpf:audio-wave" className='text-primary' style={{ fontSize: '25px' }} />
                <p className='text-sm'>Powered by <span className='font-bold'>wavehealth</span></p>
            </div>
        </div>
    )
}


// bg-primary-100

export default AuthLayout