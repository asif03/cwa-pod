import Header from "../components/Header.tsx";
import CompanyList from "../components/CompanyList.tsx";
import {connectedCompanySample} from "../constants";

const Home = () => {
  const companies = connectedCompanySample;
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <div className="flex flex-col gap-2">
        <CompanyList companies={companies} />
      </div>
    </div>
  )
}
export default Home;
