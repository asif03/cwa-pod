import { ChevronDownIcon, SquareArrowOutUpRight } from "lucide-react";
import productImg from "/images/front-tshirt.png";

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
      <div className="flex w-full flex-1 flex-col rounded-xl bg-white p-5 drop-shadow-xl">
        <h4>Products</h4>
        <div className="overflow-x-scroll rounded-xl border lg:overflow-hidden">
          <table className="w-full table-auto">
            <tbody>
              <tr>
                <td>
                  <div className="border p-4">
                    <img
                      src={productImg}
                      alt="Product Image"
                      width={60}
                      height={60}
                    />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-2">
                    <p className="font-bold">
                      Product Long Title To Test Long Title in the Product List
                      Table
                    </p>
                    <div className="flex flex-row items-center justify-start gap-2">
                      <span className="badge">Front</span>
                      <span className="badge">Back</span>
                      <span className="badge">Left</span>
                      <span className="badge">Right</span>
                    </div>
                  </div>
                </td>
                <td>Sep 25 2024 10:51am</td>
                <td>Mr. John Doe</td>
                <td className="font-bold">$1000.00</td>
              </tr>
              <tr>
                <td className="w-16">
                  <div className="border p-4">
                    <img
                      src={productImg}
                      alt="Product Image"
                      width={60}
                      height={60}
                    />
                  </div>
                </td>
                <td></td>
                <td>Sep 25 2024 10:51am</td>
                <td>Mr. John Doe</td>
                <td className="font-bold">$1000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
