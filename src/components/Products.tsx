import { productsTitle, productsBtnText, products } from "../utils/data";

import arrowIcon from "../assets/arrow-icon.svg";
import starsIcon from "../assets/stars-icon.svg";
import plusIcon from "../assets/plus-icon.svg";

import FadeIn from "./ui/FadeIn";

const Products = () => {
  return (
    <div
      id="products"
      className="flex flex-col 2xl:flex-row gap-[128px] 2xl:gap-2 2xl:justify-between mt-[160px] 2xl:mt-[270px] mb-[160px] max-w-[1490px]
      mx-auto px-10 w-full"
    >
      <FadeIn delay={0.2} direction="right">
        <div className="flex flex-col">
          <h1 className="text-center 2xl:text-start text-fontBlack text-5xl lg:text-[64px] font-medium mb-6">
            {productsTitle}
          </h1>
          <button
            className="flex items-center gap-2 bg-transparent text-fontBlack border-transparent font-bold py-2
              px-4 rounded-lg w-fit border hover:border-black outline-none focus:outline-none ease-linear transition-all duration-350 mx-auto
              2xl:mx-0 mb-10 2xl:mb-0"
          >
            <h5 className="text-lg lg:text-xl text-[#4F4F4F] font-medium">
              {productsBtnText}
            </h5>
            <img src={arrowIcon} alt="" />
          </button>
        </div>
      </FadeIn>
    </div>
  );
};

export default Products;
