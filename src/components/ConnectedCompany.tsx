import { Link } from "react-router";
import linkedIcon from "../assets/icons/linked.svg";

const ConnectedCompany = ({ company }: { company: ICompany }) => {
  return (
    <li className="h-auto w-full border bg-white p-2">
      <div className="flex h-full flex-row gap-5">
        <div className="min-w-[120px] flex-none place-content-center border px-5 py-5">
          <img src={company.logo} alt="company image" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="text-[20px] font-bold">{company.companyName}</div>
          <p className="text-[14px] font-normal">{company.description}</p>
        </div>
        <div className="h-full flex-none items-center justify-center">
          <button className="flex flex-row gap-1 bg-[#FFC804]/45 px-4 py-2 text-[14px] font-bold text-black">
            <img
              src={linkedIcon}
              className="h-5 w-5"
              alt={company.companyName}
            />{" "}
            <span>Conneted</span>
          </button>
        </div>
        <div className="h-full flex-none place-content-center">
          <Link
            to={`/dashboard/${company.id}/products`}
            className="bg-primary rounded-lg px-4 py-2 text-[14px] font-bold text-white"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </li>
  );
};
export default ConnectedCompany;
