import { Outlet, useParams } from "react-router";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  const { cid } = useParams();

  return (
    <div className="flex flex-col gap-5">
      <Navbar companyId={cid} />

      <div className="flex flex-1 flex-col border bg-white p-5 drop-shadow-sm">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
