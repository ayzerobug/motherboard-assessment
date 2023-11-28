import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import FilterTab from "@/components/ui/customs/FilterTab";
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/customs/DataTable";
import { DataTableColumnHeader } from "@/components/ui/customs/data-table/ColumnHeader";
import Ratings from "@/components/ui/customs/Ratings";

type Payment = {
  id: string
  name: string,
  address: string,
  phoneNumber: string,
  ratings: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />
  },
  {
    accessorKey: "address",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Address" />,
    cell: ({ row }) => {
      return <p className="text-ellipsis">
        {row.getValue('address')}
      </p>
    },
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Phone no" />,
    cell: ({ row }) => {
      return <p className="whitespace-nowrap">
        {row.getValue('phoneNumber')}
      </p>
    },
  },
  {
    accessorKey: "ratings",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Ratings" />,
    cell: ({ row }) => {
      return <Ratings count={row.getValue('ratings')} />
    },
  },
  {
    accessorKey: "id",
    header: () => null,
    cell: () => {
      return <div>
        <Button variant="outline" className="bg-transparent border-gray-300 px-3">
          <Icon icon="mingcute:more-2-line" className="h-5 w-5" />
        </Button>
      </div>
    },
  },
]

const MyHospitalsPage = () => {
  const payments: Payment[] = [
    {
      id: "728ed52f",
      name: "Afrimed Specialist Hospital",
      address: "17, Bamidele Street, Osapa London, Lekki, Ibeju-Lekki",
      phoneNumber: "0814 609 2019",
      ratings: 5
    },
    {
      id: "489e1d42",
      name: "Aniyun Hospital Ltd",
      address: "3, Femi Aderibigbe Close, Ifako, Gbagada, Lagos, 3, Femi Aderibigbe Close, Ifako, Gbagada, Lagos.",
      phoneNumber: "0814 609 2019",
      ratings: 4
    },
    {
      id: "489e1d42",
      name: "Araba Medical Centre",
      address: "122, Ekoro-Agbelekale Road, Big Joy B/stop, Abule Egba, Lagos.",
      phoneNumber: "0814 609 2019",
      ratings: 2
    },
    {
      id: "489e1d421",
      name: "Blue Cross Hospital",
      address: "48, Ijaiye road, Ogba, (Beside UBA, Ikeja)",
      phoneNumber: "0814 609 2019",
      ratings: 1
    },
    {
      id: "489e1d421",
      name: "Crystal Specialist Hospital",
      address: "148/150, Akowonjo Road, Dopemu, Egbeda",
      phoneNumber: "0814 609 2019",
      ratings: 5
    },
    {
      id: "489e1d421",
      name: "Faith Care Hospital",
      address: "32 Road House 29, Festac Town, Lagos.",
      phoneNumber: "0814 609 2019",
      ratings: 3
    },
    {
      id: "489e1d421",
      name: "Faith City Hospital- Ajao Estate",
      address: "32 Road House 29, Festac Town, Lagos.",
      phoneNumber: "0814 609 2019",
      ratings: 5
    },
    {
      id: "489e1d4212",
      name: "Faleti Medical Center",
      address: "98, Bale Street, New Road, b/stop, Olodi Apapa, Lagos",
      phoneNumber: "0814 609 2019",
      ratings: 5
    },
    {
      id: "489e1d4212",
      name: "First City Hospital",
      address: "1B, Williams Street, Off Diya street, Behind GTBank, Sawmill, Gbagada,",
      phoneNumber: "0814 609 2019",
      ratings: 5
    },
    {
      id: "489e1d4212",
      name: "First Dominican Hospital",
      address: "27, Aljahi Masha Road, By Masha B/stop, Surulere, Lagos.",
      phoneNumber: "0814 609 2019",
      ratings: 5
    },
  ]

  return <div className="py-5 flex flex-col gap-y-5">
    <div className="flex justify-between">
      <h2 className="font-semibold text-2xl">My Hospitals</h2>
      <Button variant="default" className="text-center">
        <Icon icon="akar-icons:search" className="md:mr-2" style={{ fontSize: "14px" }} />
        <span className="mb-1 hidden md:block">Find hospitals near me</span>
      </Button>
    </div>
    <div className="flex gap-x-4 overflow-auto no-scrollbar">
      <FilterTab icon="ph:first-aid-bold" label="All Hospitals" count={0} active={true} />
      <FilterTab icon="tdesign:time" label="Recently Visited" count={0} />
      <FilterTab icon="mdi:favourite-border" label="Favourite" count={0} />
    </div>
    <div className="flex flex-col gap-y-4 w-100">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-xl">All Hospitals</h4>
        <div className="flex max-sm:hidden">
          <Button variant="ghost" className="flex gap-x-1 items-center">
            <Icon icon="akar-icons:search" className="text-gray-600 h-4 w-4" />
            <span className="text-[16px] text-gray-600 mb-[2px]">Search</span>
          </Button>
          <Button variant="ghost" className="flex gap-x-1 items-center">
            <Icon icon="bi:filter" className="text-gray-600 h-6 w-6" />
            <span className="text-[16px] text-gray-600 mb-1">Filter</span>
          </Button>
          <Button variant="ghost" className="flex gap-x-1 items-center">
            <Icon icon="carbon:chevron-sort" className="text-gray-600 h-5 w-5" />
            <span className="text-[16px] text-gray-600 mb-1">Sort</span>
          </Button>
        </div>
      </div>
      <DataTable columns={columns} data={payments} />
    </div>
  </div>;
};

export default MyHospitalsPage;
