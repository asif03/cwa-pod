import productThumbnail from "/images/product-thumbnail.png";

const ProductCard = () => {
  return (
    <div className="flex max-w-[210px] flex-col">
      <div className="h-[230px] w-[210px] place-content-center place-items-center border p-5">
        <img
          src={productThumbnail}
          alt="Product Name"
          className="h-[153px] w-[117px]"
        />
      </div>
      <p className="pt-2 text-center text-sm font-bold">
        Product Long Title To Test Long Title in the Product List
      </p>
    </div>
  );
};
export default ProductCard;
