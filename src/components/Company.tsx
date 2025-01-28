const Company = ({company}:{company:ICompany}) => {
  return (
    <li className="border p-2 lg:min-w-[590px] w-full bg-white lg:flex-1 flex-none">
      <div className="flex flex-row gap-2">
        <div className="border px-5 py-5 place-content-center min-w-[120px]">
          <img src={company.logo} alt="company image" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-bold text-[20px]">{company.companyName}</div>
          <p className="font-normal text-[14px]">{company.description}</p>

        </div>
      </div>
    </li>
  );
}
export default Company
