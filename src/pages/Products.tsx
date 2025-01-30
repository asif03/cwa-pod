import Search from "../components/Search.tsx";
import { Link } from "react-router";

import productImg from "/images/front-tshirt.png";
import Pagination from "../components/Pagination.tsx";

const Products = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center justify-between">
        <h4>Imported Product from Printify</h4>
        <div className="flex flex-row items-center justify-end gap-5">
          <Search />
          <Link to={`/dashboard/1/products/new`} className="btn bg-primary">
            Add Product
          </Link>
        </div>
      </div>
      <div className="overflow-x-scroll pb-5 lg:overflow-hidden lg:pb-0">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="leftrow w-12">Image</th>
              <th className="min-w-60">Product Title</th>
              <th>Print Area</th>
              <th className="rightrow"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="border p-4">
                  <img
                    src={productImg}
                    className="h-14 w-14"
                    alt="Product Image"
                  />
                </div>
              </td>
              <td className="inner font-bold">
                Product Long Title To Test Long Title in the Product List Table
              </td>
              <td className="inner">
                <div className="flex flex-row items-center justify-start gap-2">
                  <span className="badge">Front</span>
                  <span className="badge">Back</span>
                  <span className="badge">Left</span>
                  <span className="badge">Right</span>
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center justify-end gap-2">
                  <button className="btn bg-primary text-xs font-bold">
                    Edit
                  </button>
                  <button className="btn bg-danger text-xs font-bold">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="border p-4">
                  <img
                    src={productImg}
                    className="h-14 w-14"
                    alt="Product Image"
                  />
                </div>
              </td>
              <td className="inner font-bold">
                Product Long Title To Test Long Title in the Product List Table
              </td>
              <td className="inner flex h-full flex-row items-center justify-start gap-2">
                <span className="badge">Front</span>
                <span className="badge">Back</span>
                <span className="badge">Left</span>
                <span className="badge">Right</span>
              </td>
              <td>
                <div className="flex flex-row items-center justify-end gap-2">
                  <button className="btn bg-primary text-xs font-bold">
                    Edit
                  </button>
                  <button className="btn bg-danger text-xs font-bold">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
