import AppLayout from "@/components/layouts/AppLayout";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import avatar from "../../assets/images/avatar.jpg";
import { Button } from "@/components/ui/button";


const MyHospitalsPage = () => {
  return <AppLayout>
    <div className="py-3 px-8 bg-white flex justify-between items-center">
      <div className="md:w-2/5">
        <Input className="bg-gray-50" icon="akar-icons:search" iconPosition="left" placeholder="Search here..." />
      </div>
      <div className="flex gap-x-3">
        <div className="h-10 w-10 bg-gray-200 flex rounded-full justify-center items-center">
          <Icon icon="ph:bell-bold" className="text-gray-700" style={{ fontSize: "20px" }} />
        </div>
        <img src={avatar} alt="Avatar" className="h-10 w-10 rounded-full" />
      </div>
    </div>
    <div className="px-8 py-5">
      <div className="flex justify-between">
        <h2 className="font-semibold text-2xl">My Hospitals</h2>
        <Button variant="default">
          <Icon icon="akar-icons:search" className="mr-2" style={{ fontSize: "16px" }} />
          <span className="mb-1"> Find hospitals near me</span>
        </Button>
      </div>
    </div>
  </AppLayout>;
};

export default MyHospitalsPage;
