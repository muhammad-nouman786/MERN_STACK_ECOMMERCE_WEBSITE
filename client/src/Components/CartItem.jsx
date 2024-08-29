import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const CartItem = () => {
  const {
    cartItem,
    all_products,
    removeToCart,
    addToCart,
    getTotalCartAmount,
    deleteToCart
  } = useContext(ShopContext);
  return (
    <section class=" py-8 antialiased md:py-16 md:px-36">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-xl font-bold sm:text-2xl text-center">Shopping Cart</h2>
      
       
                  <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-2xl">
                      <div class="space-y-6">
                     {
                      all_products.map((e)=>{
                        if(cartItem[e.id]>0){
                          return <div key={e.id}>
                               <div class="rounded-lg bg-orange-200 p-4 shadow-sm md:p-6">
                          <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                            <span class="shrink-0 md:order-1">
                              <img
                                class="h-20 w-20"
                                src={e.image}
                                alt="imac image"
                              />
                            </span>
                            <div class="flex items-center justify-between md:order-3 md:justify-end">
                              <div class="flex items-center">
                                <button
                                  type="button"
                                  class="inline-flex text-lg shrink-0 items-center justify-center  "
                                  onClick={() => {
                                    removeToCart(e.id);
                                  }}
                                >
                                  -
                                </button>
                                <span className="w-10  shrink-0 border-0 bg-transparent text-center text-sm font-medium">
                                  {cartItem[e.id]}
                                </span>
                                <button
                                  type="button"
                                  class="inline-flex text-lg shrink-0 items-center justify-center  "
                                  onClick={() => {
                                    addToCart(e.id);
                                  }}
                                >
                                  +
                                </button>
                              </div>
                              <div class="text-end md:order-4 md:w-32">
                                <p class="text-base font-bold text-red-500">
                                  ${e.new_price * cartItem[e.id]}
                                </p>
                              </div>
                            </div>

                            <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                              <span class="text-base font-medium">
                                {e.name}
                              </span>

                              <div class="flex items-center gap-4">
                                <button
                                  type="button"
                                  class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                  onClick={()=>{deleteToCart(e.id)}}
                                >
                                  <svg
                                    class="me-1.5 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M6 18 17.94 6M18 18 6.06 6"
                                    />
                                  </svg>
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                          </div>
                        }
                      })
                     }
                      </div>
                    </div>

                    <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                      <div class="space-y-4 rounded-lg  bg-orange-200 p-4 shadow-sm sm:p-6">
                        <p class="text-xl font-semibold">Order summary</p>

                        <div class="space-y-4">
                          <div class="space-y-2">
                            <dl class="flex items-center justify-between gap-4">
                              <dt class="text-base font-normal ">Subtotal</dt>
                              <dd class="text-base font-medium">
                                ${getTotalCartAmount()}
                              </dd>
                            </dl>

                            <dl class="flex items-center justify-between gap-4">
                              <dt class="text-base font-normal ">Shipping</dt>
                              <dd class="text-base font-medium">Free</dd>
                            </dl>
                          </div>

                          <dl class="flex items-center justify-between gap-4 border-t border-black">
                            <dt class="text-base font-bold">Total</dt>
                            <dd class="text-base font-bold">${getTotalCartAmount()}</dd>
                          </dl>
                        </div>

                        <a
                          href="#"
                          class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                        >
                          Proceed to Checkout
                        </a>

                        <div class="flex items-center justify-center gap-2">
                          <span class="text-sm font-normal "> or </span>
                          <Link
                            to={"/"}
                            class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                          >
                            Continue Shopping
                            <svg
                              class="h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 12H5m14 0-4 4m4-4-4-4"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>

                      <div class="space-y-4 rounded-lg  bg-orange-200 p-4 shadow-sm  sm:p-6">
                        <form class="space-y-4">
                          <div>
                            <label
                              for="voucher"
                              class="mb-2 block text-sm font-medium"
                            >
                              {" "}
                              Do you have a voucher or gift card?{" "}
                            </label>
                            <input
                              type="text"
                              id="voucher"
                              class="block w-full rounded-lg p-2.5 text-sm focus:outline-none"
                              placeholder=""
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            class="flex w-full items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white"
                          >
                            Apply Code
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

    </section>
  );
};

export default CartItem;
