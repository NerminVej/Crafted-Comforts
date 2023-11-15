import React, { useState } from "react";
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";
import NavLink from "./NavLink";

import { heroTitle, heroSubtitle } from "../utils/data.ts";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
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
      <div
        className="relative w-full max-w-[1490px] flex 
        items-center justify-between pt-10 mx-auto px-10"
      ></div>
      <img src={logo} />
      <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
        {" "}
        <NavLink to="services">Service </NavLink>
        <NavLink to="products">Shop </NavLink>
        <NavLink to="reference">Reference </NavLink>
        <NavLink to="care">Care </NavLink>
      </ul>

      <img src={cartIcon} className="hidden md:block cursor-pointer" />
      <HiMenuAlt3
        size={30}
        className="block md:hidden cursor-pointer text-white"
        onClick={() => setShowMobileMenu((prev) => !prev)}
      />
    </div>
  );
};
