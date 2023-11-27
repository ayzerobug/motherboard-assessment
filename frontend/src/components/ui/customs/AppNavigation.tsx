import { Link, To } from "react-router-dom"
import { Icon } from "@iconify/react"
import { cn } from "@/@utils"

const AppNavigation = ({ label, to, icon, active }: { label: string, to: To, icon: string, active: boolean }) => {
    return (
        <li>
            <Link to={to} className={cn('flex items-center py-2 px-3 text-gray-900 rounded-md dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700 group',
                active ? "bg-primary-100" : '')}>
                <Icon icon={icon} className={active ? 'text-primary' : ''} style={{ fontSize: "20px" }} />
                <span className={cn('ms-3', active ? 'font-semibold' : '')}>{label}</span>
            </Link>
        </li>
    )
}

export default AppNavigation