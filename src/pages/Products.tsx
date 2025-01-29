import Search from "../components/Search.tsx";
import { Link } from "react-router";

const Products = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h4>Imported Product from Printify</h4>
        <div className="flex flex-row items-center justify-end gap-5">
          <Search />
          <Link to="" className="btn bg-primary">
            Add Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
