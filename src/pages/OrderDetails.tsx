import { ChevronDownIcon, SquareArrowOutUpRight } from "lucide-react";

const OrderDetails = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full flex-1 flex-col border bg-white p-5 drop-shadow-sm">
        <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center justify-center gap-2">
              <h4>#PF110666593</h4>
              <div className="badge rounded-full font-normal text-white">
                Draft
              </div>
            </div>
            <p className="text-[13px] text-black/65">Sep 25 2024 10:51am</p>
          </div>
          <div className="flex flex-row items-start justify-center gap-2">
            <button className="btn bg-secondary text-sm font-bold text-black outline-1 -outline-offset-1 outline-gray-300">
              Edit
            </button>
            <div className="grid grid-cols-1">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="bg-secondary col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-8 pl-3 text-sm font-bold text-black outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option>Print</option>
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-black sm:size-4"
              />
            </div>
            <div className="grid grid-cols-1">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="bg-secondary col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-8 pl-3 text-sm font-bold text-black outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option>More Actions</option>
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-black sm:size-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col rounded-xl bg-white drop-shadow-xl">
        <div className="h-[45px] place-content-center rounded-t-xl bg-[#FF9635] px-5 text-sm font-bold">
          Order needs actions on Printful side to fulfill it
        </div>
        <div className="flex flex-col justify-start gap-5 p-5">
          <p className="text-sm text-black/65">
            Order is saved as draft. Complete it anytime.
          </p>
          <button className="btn bg-secondary flex w-fit items-center justify-center gap-2 px-5 text-sm font-bold text-black outline-1 -outline-offset-1 outline-gray-300">
            <SquareArrowOutUpRight />
            Printfull Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
