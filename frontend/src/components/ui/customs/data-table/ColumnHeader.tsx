
import { cn } from "@/@utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import {
    ArrowDownIcon,
    ArrowUpIcon,
    CaretSortIcon,
    EyeNoneIcon,
} from "@radix-ui/react-icons"
import { Column } from "@tanstack/react-table"
import { Button } from "../../button"
import { Icon } from "@iconify/react/dist/iconify.js"


interface DataTableColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
}

export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
    className,
}: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                size="sm"
                className="p-0 flex justify-between w-full"
            >
                <span>{title}</span>
                <Icon className="ml-2 h-5 w-5" icon="carbon:chevron-sort" />
            </Button>
        </div>
    )
}
