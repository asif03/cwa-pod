import { Outlet, useParams } from "react-router";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  const { cid } = useParams();

  //const isPathMatched = useMatch(`/dashboard/${cid}/products/add`);

  return (
    <div className="flex flex-col gap-5">
      <Navbar companyId={cid} />

      <Outlet />

      {/*isPathMatched && <div className="bg-[#FAEAA1]">Asif</div>*/}
    </div>
  );
};
export default DashboardLayout;
