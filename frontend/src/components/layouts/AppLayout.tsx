import { ReactNode, useEffect } from "react"
import logo from "../../assets/images/logo.png";
import { Separator } from "../ui/separator";
import { AppRoutes } from "@/common/Approutes";
import AppNavigation from "../ui/customs/AppNavigation";
import { Input } from "../ui/input";
import { Icon } from "@iconify/react/dist/iconify.js";
import avatar from "../../assets/images/avatar.jpg";
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const navigation1 = [
    {
        label: "Dashboard",
        icon: "solar:home-2-outline",
        to: AppRoutes.appDashboard
    },
    {
        label: "Consult a Doctor",
        icon: "uil:comment-lines",
        to: AppRoutes.consult
    },
    {
        label: "Appointments",
        icon: "basil:calendar-outline",
        to: AppRoutes.appointments
    },
    {
        label: "Medical History",
        icon: "akar-icons:file",
        to: AppRoutes.medicalHistory
    },
    {
        label: "My Hospitals",
        icon: "ph:first-aid-bold",
        to: AppRoutes.myHospitals
    }
]
const navigation2 = [
    {
        label: "Settings",
        icon: "prime:cog",
        to: AppRoutes.appSettings
    },
    {
        label: "Help Center",
        icon: "iconoir:headset-help",
        to: AppRoutes.helpCenter
    },
    {
        label: "Refer family & friends",
        icon: "streamline:gift-2",
        to: AppRoutes.affiliate
    }
]


const ProfileDropdown = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('authToken');
        navigate(AppRoutes.login)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger> <img src={avatar} alt="Avatar" className="h-8 w-8 md:h-10 md:w-10 rounded-full" /></DropdownMenuTrigger>
            <DropdownMenuContent className="mx-5">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}><span className="text-[red]">Logout</span></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


const AppLayout = ({ children }: { children?: ReactNode }) => {
    const currentURL = window.location.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("authToken")) {
            navigate(AppRoutes.login)
        }
    }, [])
    return (
        <div className="bg-gray-50 ">
            <div className="bg-white flex justify-between mx-3">
                <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <div className="py-3 bg-white flex md:hidden gap-x-2 items-center">
                    <div className="h-8 w-8 bg-gray-200 flex rounded-full justify-center items-center">
                        <Icon icon="akar-icons:search" className="text-gray-700" style={{ fontSize: "16px" }} />
                    </div>
                    <div className="h-8 w-8 bg-gray-200 flex rounded-full justify-center items-center">
                        <Icon icon="ph:bell-bold" className="text-gray-700" style={{ fontSize: "16px" }} />
                    </div>
                    <ProfileDropdown />
                </div>
            </div>

            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform  -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full flex flex-col px-3 py-4 overflow-y-auto bg-white border-r-2 dark:bg-gray-800">
                    <img src={logo} alt="Wave text" className="my-5 mx-2 w-4/5" />
                    <ul className="space-y-2 text-sm">
                        {navigation1.map((nav, index) => <AppNavigation key={`nav1-key-${index}`} active={currentURL === nav.to} icon={nav.icon} to={nav.to} label={nav.label} />)}
                    </ul>
                    <Separator className="my-3" />
                    <ul className="space-y-2 text-sm flex-1 flex flex-col justify-end">
                        {navigation2.map((nav, index) => <AppNavigation key={`nav2-key-${index}`} active={currentURL === nav.to} icon={nav.icon} to={nav.to} label={nav.label} />)}
                    </ul>
                </div>
            </aside>

            <div className="min-h-screen sm:ml-64">
                <div className="py-3 px-5 md:px-8 bg-white hidden md:flex justify-between items-center">
                    <div className="md:w-2/5">
                        <Input className="bg-gray-50" icon="akar-icons:search" iconPosition="left" placeholder="Search here..." />
                    </div>
                    <div className="flex gap-x-3">
                        <div className="h-10 w-10 bg-gray-200 flex rounded-full justify-center items-center">
                            <Icon icon="ph:bell-bold" className="text-gray-700" style={{ fontSize: "20px" }} />
                        </div>
                        <ProfileDropdown />
                    </div>
                </div>
                <div className="px-5 md:px-8">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppLayout


