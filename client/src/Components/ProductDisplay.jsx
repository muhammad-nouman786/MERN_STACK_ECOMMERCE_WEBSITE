import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div class="mt-16">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-8">
            <img
              src={product.image}
              alt="Product"
              class="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div class="flex gap-4 py-4 justify-center overflow-x-auto">
              <img
                src={product.image}
                alt="Thumbnail 1"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
              />
              <img
                src={product.image}
                alt="Thumbnail 2"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
              />
              <img
                src={product.image}
                alt="Thumbnail 3"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
              />
              <img
                src={product.image}
                alt="Thumbnail 4"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4">
            <h2 class="text-3xl font-bold mb-2">{product.name}</h2>
            <p class="text-gray-600 mb-4">{product.category}</p>
            <div class="mb-4">
              <span class="text-2xl font-bold mr-2">${product.new_price}</span>
              <span class="text-gray-500 line-through">
                ${product.old_price}
              </span>
            </div>
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p class="text-gray-700 mb-6">
              Introducing our premium 100% Cotton Fabric, perfect for all your
              crafting and sewing needs. This versatile cloth features a soft,
              breathable texture that ensures comfort and durability. With its
              vibrant colors and smooth finish, it's ideal for creating stylish
              garments, home décor, or any DIY project. The fabric is easy to
              work with, machine washable, and resistant to fading, making it a
              reliable choice for both beginners and experienced crafters.
              Whether you're designing a new outfit or adding a touch of
              elegance to your space, this cotton fabric offers endless
              possibilities.
            </p>

            <div class="mb-6">
              <h3 class="text-lg font-semibold mb-2">Size:</h3>
              <div class="flex space-x-2">
                <button class="w-8 h-8 bg-red-500 rounded-full text-white">
                  S
                </button>
                <button class="w-8 h-8 bg-red-500 rounded-full text-white">
                  M
                </button>
                <button class="w-8 h-8 bg-red-500 rounded-full text-white">
                  L
                </button>
                <button class="w-8 h-8 bg-red-500 rounded-full text-white">
                  XL
                </button>
                <button class="w-8 h-8 bg-red-500 rounded-full text-white">
                  XXL
                </button>
              </div>
            </div>
            <div class="flex space-x-4 mb-6">
              <button class="bg-red-500 flex gap-2 items-center text-white md:px-6 px-2 py-2 rounded-md hover:bg-red-600 focus:outline-none"
              onClick={()=>{addToCart(product.id)}}
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
              <button class="bg-transparent flex gap-2 items-center border border-gray-400  md:px-6 px-2 py-2 rounded-md focus:outline-none hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
