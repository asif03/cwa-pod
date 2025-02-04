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

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex w-full flex-col gap-5 lg:w-3/4">
          <div className="flex w-full flex-col gap-5 rounded-xl bg-white p-5 drop-shadow-xl">
            <h4>Products</h4>
            <div className="overflow-x-scroll rounded-xl border lg:overflow-hidden">
              <table className="w-full table-auto">
                <tbody>
                  <tr>
                    <td className="w-20 pl-2">
                      <div className="border p-2">
                        <img
                          src={productImg}
                          alt="Product Image"
                          width={80}
                          height={80}
                        />
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-2">
                        <p className="font-bold">
                          Men’s Staple Tank Top | Bella + Canvas 3480 (Black /
                          M)
                        </p>
                        <p className="text-xs font-normal">
                          Men’s Staple Tank Top | Bella + Canvas 3480
                        </p>
                        <span className="badge w-[134px] rounded-full bg-[#DEE1E8] px-4 text-center">
                          Black / M
                        </span>
                      </div>
                    </td>
                    <td>$15.00 X 3</td>
                    <td>$45.00</td>
                  </tr>
                  <tr>
                    <td className="pl-2">
                      <div className="border p-2">
                        <img
                          src={productImg}
                          alt="Product Image"
                          width={80}
                          height={80}
                        />
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-2">
                        <p className="font-bold">
                          Men’s Staple Tank Top | Bella + Canvas 3480 (Black /
                          M)
                        </p>
                        <p className="text-xs font-normal">
                          Men’s Staple Tank Top | Bella + Canvas 3480
                        </p>
                        <span className="badge w-[134px] rounded-full bg-[#DEE1E8] px-4 text-center">
                          Black / M
                        </span>
                      </div>
                    </td>
                    <td>$15.00 X 3</td>
                    <td>$45.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex w-full flex-col gap-5 rounded-xl bg-white p-5 drop-shadow-xl">
            <h4>Pricing Summery</h4>
            <div className="overflow-x-scroll lg:overflow-hidden">
              <table className="w-full table-auto">
                <tbody>
                  <tr className="border-0">
                    <td className="w-20">Subtotal</td>
                    <td>6 Items</td>
                    <td>$135.00</td>
                  </tr>
                  <tr className="border-0">
                    <td className="w-20">Shipping</td>
                    <td>Shipping Method Information</td>
                    <td>$135.00</td>
                  </tr>
                  <tr className="border-0">
                    <td className="w-20">Tax</td>
                    <td>Tax Details with country name</td>
                    <td>$15.00</td>
                  </tr>
                  <tr>
                    <td className="w-20 font-bold">Total</td>
                    <td></td>
                    <td className="font-bold">$15.00</td>
                  </tr>
                  <tr className="border-0">
                    <td className="w-20 font-bold">Paid</td>
                    <td></td>
                    <td className="font-bold">$15.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 lg:w-1/4">
          <div className="flex w-full flex-col gap-5 rounded-xl bg-white p-5 drop-shadow-xl">
            <h4>Notes</h4>
            <p className="text-sm">No notes for customer</p>
          </div>
          <div className="flex w-full flex-col gap-5 rounded-xl bg-white p-5 drop-shadow-xl">
            <h4>Customer</h4>
            <p className="text-sm">John Doe</p>
            <h4>Contact Information</h4>
            <p className="text-sm">
              johndoe@example.com
              <br />
              +1 123 123456789
            </p>
            <h4>Shipping Address</h4>
            <p className="text-sm">
              123, New York City, New York, <br />
              NY-123456 <br /> United State
            </p>
            <h4>Billing Address</h4>
            <p className="text-sm">
              123, New York City, New York, <br />
              NY-123456 <br /> United State
            </p>
          </div>
          <div className="flex w-full flex-col gap-5 rounded-xl bg-white p-5 drop-shadow-xl">
            <h4>Important</h4>
            <p className="text-sm">
              Our product prices can chnage depending on where the order is
              fulfilled and whichcurrency you use to pay for it. For example, if
              you order a t-shirt that we only fulfill in the US and you pay for
              it in EUR, the price you pay would be our USD price converted to
              EUR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
