import { useState } from "react";
import flag from "../assets/icons/flag.svg";
import { color, colors, printedAreas, sizes } from "../constants";
import MultiSelectButtons from "./MultiSelectButtons";
import ProductShowCase from "./ProductShowCase";

const images = [
  "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg",
  "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg",
  "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg",
  "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg",
];

const AddProduct = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const handleColorSelectionChange = (newSelection: string[]) => {
    setSelectedColors(newSelection);
  };

  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const handleSizeSelectionChange = (newSelection: string[]) => {
    setSelectedSize(newSelection);
  };

  const [selectedPrintArea, setSelectedPrintArea] = useState<string[]>([]);
  const handlePrintAreaSelectionChange = (newSelection: string[]) => {
    setSelectedPrintArea(newSelection);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full flex-1 flex-col gap-5 border bg-white p-5 drop-shadow-sm">
        <h4>Product Information</h4>
        <p className="text-sm font-normal text-black/65">
          Select variants and other option that you want to import in to your
          store
        </p>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex w-full flex-col gap-5 lg:max-w-xl">
            <ProductShowCase images={images} />
          </div>
          <div className="flex w-full flex-col gap-5 text-black">
            <p className="text-xl font-bold">
              Product Long Title To Test Long Title in the Product List
            </p>
            <p className="text-sm">
              <span className="font-bold">Price:</span> $100
            </p>
            <p className="text-sm">
              <span className="font-bold">Product Type:</span> T-Shirt
            </p>
            <p className="text-sm">
              <span className="font-bold">Brand:</span> Gildan
            </p>
            <p className="text-sm">
              <span className="font-bold">Description:</span> Add your design to
              the comfortable, elastic, and durable Unisex Tri-Blend T-Shirt to
              make it even more special, and start selling it worldwide. When
              printed, the tri-blend fabric may give your design a unique
              vintage look! .:
            </p>
            <h4>Pick The Variants:</h4>
            <p className="text-sm font-bold">Color:</p>
            <MultiSelectButtons
              options={colors}
              selected={selectedColors}
              onSelectionChange={handleColorSelectionChange}
            />
            <p className="text-sm font-bold">Size:</p>
            <MultiSelectButtons
              options={sizes}
              selected={selectedSize}
              onSelectionChange={handleSizeSelectionChange}
            />

            <h4>Pick the print area:</h4>
            <MultiSelectButtons
              options={printedAreas}
              selected={selectedPrintArea}
              onSelectionChange={handlePrintAreaSelectionChange}
            />

            <h4>Selected Options:</h4>
            <p className="text-sm">
              <span className="font-bold">Variants:</span> Total{" "}
              {selectedColors.length} variant will be created.
            </p>
            <p className="text-sm">
              <span className="font-bold">Print Area:</span> Total{" "}
              {selectedPrintArea.length} print area selected.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center py-5">
          <button className="btn bg-primary h-[50px] w-full max-w-[300px]">
            Create Product
          </button>
        </div>
      </div>
      <div className="flex w-full flex-row justify-between gap-2 rounded-lg border bg-[#FAEAA1] p-5 shadow-lg">
        <img src={flag} alt="Product Image" className="h-8 w-6 flex-none" />
        <div className="flex flex-1 flex-col gap-5 pt-3">
          <h4 className="text-base font-bold">Product Create</h4>
          <p className="text-xs">
            Write a help details defining global form and product specific form,
            and its uses. Write a help details defining global form and product
            specific form, and its uses. Write a help details defining global
            form and product specific form, and its uses. Write a help details
            defining global form and product specific form, and its uses. Write
            a help details defining global form and product specific form, and
            its uses.
            <br />
            <br />
            Write a help details defining global form and product specific form,
            and its uses. Write a help details defining global form and product
            specific form, and its uses. Write a help details defining global
            form and product specific form, and its uses.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
