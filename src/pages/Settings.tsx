import { HelpCircle, X } from "lucide-react";

const Settings = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full flex-1 flex-col border bg-white p-5 drop-shadow-sm">
        <div className="flex flex-row items-center justify-between">
          <h4>Printful Integration</h4>
          <button className="btn text-danger ring-warning flex items-center gap-2 text-sm ring-1">
            <X size={16} />
            Remove Integration
          </button>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col"></div>
          <div className="border p-2">
            <div className="flex flex-row items-center justify-between gap-2">
              <HelpCircle size={30} className="text-[#FFC52F]" />
              <h4 className="text-sm">Where to find Printful API key</h4>
            </div>
            <p className="lead text-xs font-normal">
              In printfull Dashboard go to Settings / API, choose your store and
              click on Go to Printful Developers. <br />
              Then in the Developer account got to Tokens. <br />
              In the Tokens panel you will find the Access key section. <br />
              The printful access is your API key.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
