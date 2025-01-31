import { useState, useEffect, useRef } from "react";

const ProductShowCase = ({ images }) => {
  const [imgId, setImgId] = useState(1);
  const showcaseRef = useRef(null);

  const slideImage = () => {
    if (showcaseRef.current) {
      const displayWidth = showcaseRef.current.clientWidth;
      showcaseRef.current.style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
    }
  };

  useEffect(() => {
    slideImage(); // Call on imgId change
  }, [imgId]);

  useEffect(() => {
    window.addEventListener("resize", slideImage);
    return () => window.removeEventListener("resize", slideImage);
  }, []);

  return (
    <>
      {/* Image Showcase */}
      <div className="flex items-center justify-center border p-5">
        <div className="flex max-h-[550px] w-full gap-5 overflow-hidden bg-white">
          <div className="img-showcase" ref={showcaseRef}>
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail Select */}
      <div className="flex flex-row gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`cursor-pointer border p-3 ${imgId === index + 1 ? "bg-primary" : ""}`}
            onClick={() => setImgId(index + 1)}
          >
            <img src={images[index]} alt={`Slide ${index + 1}`} />
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductShowCase;

{
  /*const ProductShowCase = () => {
  return (
    <div>
      <div className="product-imgs">
        <div className="img-display">
          <div className="img-showcase">
            <img
              src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
              alt="shoe image"
            />
            <img
              src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
              alt="shoe image"
            />
            <img
              src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
              alt="shoe image"
            />
            <img
              src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
              alt="shoe image"
            />
          </div>
          <div className="img-select">
            <div className="img-item">
              <a href="#" data-id="1">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                  alt="shoe image"
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="2">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                  alt="shoe image"
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="3">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                  alt="shoe image"
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="4">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                  alt="shoe image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowCase;*/
}
