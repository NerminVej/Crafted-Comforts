import React from "react";
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";

export const Hero = () => {
  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative w-full max-w-[1490px] flex items-center justify-between pt-10 mx-auto px-10"></div>
      <ul className="hidden md:flex items-center gap-10 lg:grap-[60px]">
        <li>
            fsd
        </li>
      </ul>
    </div>
  );
};
