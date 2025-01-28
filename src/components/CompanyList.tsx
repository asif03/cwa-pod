import Company from "./Company.tsx";

const CompanyList = ({companies}:{companies:ICompany[]}) => {
  return (
    <ul className="gap-5 flex flex-wrap">
      {companies.map((company:ICompany) => (
        <Company key={company.id} company={company}  />
      ))}
     </ul>
  )
}
export default CompanyList
