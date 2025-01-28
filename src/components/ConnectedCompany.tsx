import {Link} from "react-router";
import linkedIcon from "../assets/icons/linked.svg";


const ConnectedCompany = ({company}:{company:ICompany}) => {
  return (
    <li className="border p-2 w-full bg-white h-auto">
      <div className="flex flex-row gap-5 h-full">
        <div className="border px-5 py-5 place-content-center min-w-[120px] flex-none">
          <img src={company.logo} alt="company image"/>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="font-bold text-[20px]">{company.companyName}</div>
          <p className="font-normal text-[14px]">{company.description}</p>
        </div>
        <div className="h-full justify-center items-center flex-none">
          <button className="bg-[#FFC804]/45 px-4 py-2 text-black text-[14px] font-bold flex flex-row gap-1">
            <img src={linkedIcon} className="w-5 h-5" alt={company.companyName} /> <span>Conneted</span>
          </button>
        </div>
        <div className="h-full place-content-center flex-none">
          <Link to={`/dashboard/${company.id}`} className="bg-primary px-4 py-2 text-white rounded-lg  text-[14px] font-bold">Dashboard</Link>

        </div>
      </div>
    </li>
  )
}
export default ConnectedCompany
