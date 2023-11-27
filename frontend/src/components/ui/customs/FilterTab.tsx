import { Icon } from "@iconify/react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/@utils"

const FilterTab = ({ icon, label, count, active = false }: { icon: string, label: string, count: number, active?: boolean }) => {
    return (
        <div className={cn('flex gap-x-3 items-center border whitespace-nowrap  px-3 py-2 rounded-md', active ? 'bg-primary-100 border-primary' : 'border-gray-400 bg-gray-100')}>
            <Icon icon={icon} className={cn('mt-[2px]', active ? 'text-primary' : 'text-gray-500 ')} />
            <p className="font-medium text-sm">{label}</p>
            <Badge className={cn('mt-[2px]', active ? 'bg-primary text-white' : 'bg-gray-200 text-black')}>{count}</Badge>
        </div>
    )
}

export default FilterTab