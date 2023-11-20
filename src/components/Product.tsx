// Product.tsx
import React from "react";
import FadeIn from "./ui/FadeIn";
import { productsTitle, productsBtnText, products } from "../utils/data";

import arrowIcon from "../assets/arrow-icon.svg";
import starsIcon from "../assets/stars-icon.svg";
import plusIcon from "../assets/plus-icon.svg";

interface ProductData {
  title: string;
  price: string;
  img: string;
}

interface ProductProps {
  product: ProductData;
  index: number;
}

const Product: React.FC<ProductProps> = ({ product, index }) => {
  return (
    <FadeIn
      key={index}
      delay={(index + 1) * 0.2}
      direction="left"
      fullWidth={true}
      padding={false}
    >
      <div className="h-[510px] relative flex-1 bg-[#C1D0E4] rounded-[50px] max-w-[500px]">
        <img
          src={product.img}
          alt={product.title}
          className="absolute -top-[120px] left-1/2 -translate-x-1/2"
        />
        <div className="absolute bottom-0 w-full bg-white h-[260px] rounded-[50px] shadow-md px-8 py-[26px] flex flex-col justify-between">
          <div>
            <h2 className="mb-2 text-fontBlack text-3xl lg:text-[32px] font-medium">
              {product.title}
            </h2>
            <img src={starsIcon} alt="Rating" />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-fontBlack text-2xl lg:text-3xl font-medium">
              {product.price}
            </h3>
            <img
              src={plusIcon}
              alt="Add to cart"
              className="cursor-pointer h-10 xs:h-12 w-10 xs:w-12"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Product;
