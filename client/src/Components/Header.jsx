import React, { useContext } from "react";
import logo from "./Assets/Frontend_Assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
const Header = () => {
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <nav className="shadow-md bg-orange-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-3">
        <Link 
          to={"/"}
          className="flex items-center md:space-x-3 space-x-2 rtl:space-x-reverse"
        >
          <img src={logo} className="md:h-8 h-7" alt="Logo" />
          <span className="self-center md:text-2xl text-xl font-semibold whitespace-nowrap">
            SHOPPER
          </span>
        </Link>
        <div className="flex md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Link to={"/login"}
            className="font-medium flex justify-center items-center border border-gray-400 rounded-3xl text-sm md:px-8 px-5 py-2 text-center hover:bg-orange-600 hover:text-white"
          >
            Login
          </Link>

          <button
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-full "
          >
            <Link to={"/cart"}><FaShoppingCart className="md:text-2xl text-xl " /></Link>
            <div class="absolute inline-flex items-center justify-center w-3 h-3 text-xs p-[10px] font-bold text-white bg-orange-600 rounded-full top-[-0px] end-[1px] ">
              {getTotalCartItems()}
            </div>
          </button>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row ">
            <li className="group transition duration-300">
              <Link to={"/"} className="block">
                Home
              </Link>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-orange-600"></span>
            </li>
            <li className="group transition duration-300">
              <Link to={"/mens"} className="block">
                Mens
              </Link>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-orange-600"></span>
            </li>
            <li className="group transition duration-300">
              <Link to={"/womens"} className="block">
                Womens
              </Link>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-orange-600"></span>
            </li>
            <li className="group transition duration-300">
              <Link to={"/kids"} className="block">
                Kids
              </Link>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-orange-600"></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
