import React from "react";
import { Link } from "react-router-dom";

const Item = (item) => {
  return (
    <div class="shadow-lg p-6 hover:scale-105 duration-200 cursor-pointer">
    <div class=" w-full">
      <Link to={`/product/${item.id}`} onClick={window.scrollTo(0,0)}>
        <img class="mx-auto h-full" src={item.image} alt="" />
      </Link>
    </div>
    <div class="pt-6">
      <div class="mb-4 flex items-center justify-between gap-4">
        <div class="flex items-center justify-end gap-1">
        </div>
      </div>

      <a href="#" class="text-lg font-semibold leading-tight">{item.name}</a>

      <ul class="mt-2 flex items-center gap-4">
        <li class="flex items-center gap-2">
          <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
          </svg>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
        </li>

        <li class="flex items-center gap-2">
          <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
        </li>
      </ul>

      <div class="mt-4 flex items-center justify-between gap-4">
        <p class="text-2xl font-extrabold leading-tight">${item.new_price}</p>
        <p class="text-xl text-gray-500 font-extrabold leading-tight line-through">${item.old_price}</p>

        <button type="button" class="inline-flex items-center rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none ">
          <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  </div>
  );
};

export default Item;
