import Pagination from "../components/Pagination";

const Orders = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full flex-1 flex-col border bg-white p-5 drop-shadow-sm">
        <div className="flex flex-col gap-5">
          <h4>Order Summery</h4>
          <div className="flex flex-row gap-5 lg:flex-row">
            <div className="flex min-h-[50px] w-full flex-row items-center justify-start gap-2 border bg-[#0587E51A]/10 p-2 text-sm font-bold">
              <span className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-white">
                4
              </span>
              Waiting for Fulfillment
            </div>
            <div className="flex min-h-[50px] w-full flex-row items-center justify-start gap-2 border bg-[#FA584B1A]/50 p-2 text-sm font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FA584B] text-white">
                4
              </span>
              On Hold
            </div>
            <div className="bg-success/10 flex min-h-[50px] w-full flex-row items-center justify-start gap-2 border p-2 text-sm font-bold">
              <span className="bg-success flex h-8 w-8 items-center justify-center rounded-full text-white">
                4
              </span>
              Being Fullfiled
            </div>
            <div className="bg-warning/10 flex min-h-[50px] w-full flex-row items-center justify-start gap-2 border p-2 text-sm font-bold">
              <span className="bg-warning flex h-8 w-8 items-center justify-center rounded-full text-white">
                4
              </span>
              Needs Approval
            </div>
            <div className="flex min-h-[50px] w-full flex-row items-center justify-start gap-2 border bg-[#FF0202]/10 p-2 text-sm font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0202] text-white">
                4
              </span>
              Failed
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col border bg-white p-5 drop-shadow-sm">
        <div className="flex flex-col gap-5">
          <h4>Order List</h4>
          <div className="overflow-x-scroll pb-5 lg:overflow-hidden lg:pb-0">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="leftrow">Order Id</th>
                  <th>Order Status</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th className="rightrow">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">#PF110666593</td>
                  <td>
                    <span className="badge rounded-full font-normal text-white">
                      Waiting
                    </span>
                  </td>
                  <td>Sep 25 2024 10:51am</td>
                  <td>Mr. John Doe</td>
                  <td className="font-bold">$1000.00</td>
                </tr>
                <tr>
                  <td className="font-bold">#PF110666593</td>
                  <td>
                    <span className="badge rounded-full font-normal text-white">
                      Waiting
                    </span>
                  </td>
                  <td>Sep 25 2024 10:51am</td>
                  <td>Mr. John Doe</td>
                  <td className="font-bold">$1000.00</td>
                </tr>
              </tbody>
            </table>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
