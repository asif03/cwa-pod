import Company from "./Company.tsx";
import ConnectedCompany from "./ConnectedCompany.tsx";

const CompanyList = ({companies}:{companies:ICompany[]}) => {
  return (
    <>
      <ul className="gap-5 flex flex-col">
        {companies.map((company: ICompany) => (
          company.isConnected && <ConnectedCompany key={company.id} company={company}/>
        ))}
      </ul>

      <ul className="gap-5 flex flex-wrap">
        {companies.map((company: ICompany) => (
          !company.isConnected && <Company key={company.id} company={company}/>
        ))}
      </ul>
    </>

  )
}
export default CompanyList
