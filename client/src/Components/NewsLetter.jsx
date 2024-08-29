import React from 'react'

const NewsLetter = () => {
  return (
    <section class="">
  <div class="py-8 px-4 max-w-screen-xl lg:py-10 lg:px-6 bg-gradient-to-t from-amber-300 to-orange-500 mx-32 mt-20">
      <div class="mx-auto max-w-screen-md sm:text-center">
          <h2 class="mb-4 text-3xl tracking-tight font-extrabold  sm:text-4xl">Get Exclusive Offers On Your Email</h2>
          <p class="mx-auto mb-8 max-w-2xl font-light  md:mb-12 sm:text-xl">Subscribe to our newsletter and stay updated</p>
          <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                      <label for="email" class="hidden mb-2 text-sm font-medium ">Email address</label>
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input class="block p-3 pl-10 w-full text-sm focus:outline-none bg-gray-50 rounded-lg  sm:rounded-none sm:rounded-l-lg " placeholder="Enter your email" type="email" />
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-red-700  sm:rounded-none sm:rounded-r-lg ">Subscribe</button>
                  </div>
              </div>
          </form>
      </div>
  </div>
</section>
  )
}

export default NewsLetter