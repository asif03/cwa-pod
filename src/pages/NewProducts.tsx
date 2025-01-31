import Search from "../components/Search.tsx";
import ProductCard from "../components/ProductCard.tsx";
import Pagination from "../components/Pagination.tsx";
import { Link } from "react-router";

const NewProducts = () => {
  return (
    <div className="flex w-full flex-1 flex-col border bg-white p-5 drop-shadow-sm">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center justify-between">
          <h4>Pick a Product From Printful</h4>
          <Search />
        </div>
        <div className="flex flex-wrap justify-evenly gap-5">
          <Link to={`/dashboard/1/products/add`}>
            <ProductCard />
          </Link>
          <Link to={`/dashboard/1/products/add`}>
            <ProductCard />
          </Link>
          <Link to={`/dashboard/1/products/add`}>
            <ProductCard />
          </Link>
          <Link to={`/dashboard/1/products/add`}>
            <ProductCard />
          </Link>
          <Link to={`/dashboard/1/products/add`}>
            <ProductCard />
          </Link>
          <Link to={`/dashboard/1/products/add`}>
            <ProductCard />
          </Link>
          <Link to={`/dashboard/1/products/add`}>
            <ProductCard />
          </Link>
          <Link to={`/dashboard/1/products/add`}>
            <ProductCard />
          </Link>
          <Link to={`/dashboard/1/products/add`}>
            <ProductCard />
          </Link>
          <Link to={`/dashboard/1/products/add`}>
            <ProductCard />
          </Link>
          <Link to={`/dashboard/1/products/add`}>
            <ProductCard />
          </Link>
        </div>
        <Pagination />
      </div>
    </div>
  );
};
export default NewProducts;
