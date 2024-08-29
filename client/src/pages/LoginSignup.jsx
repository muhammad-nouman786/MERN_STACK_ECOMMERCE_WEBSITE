import React from 'react'

const LoginSignup = () => {
  return (
    <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="relative px-4 py-10 shadow-orange-200 bg-orange-200 sm:rounded-xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-bold">Register</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4  sm:text-lg sm:leading-7">
              <div class="relative">
                  <input  name="name" type="text" class="peer placeholder-transparent h-10 w-full border-b  border-black text-gray-700 focus:outline-none  placeholder:bg-orange-200 bg-orange-200" placeholder="Email address" />
                  <label for="name" class=" absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">Name</label>
                </div>
                <div class="relative">
                  <input  name="email" type="email" class="peer placeholder-transparent h-10 w-full border-b  border-black text-gray-700 focus:outline-none  placeholder:bg-orange-200 bg-orange-200" placeholder="Email address" />
                  <label for="email" class=" absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">Email Address</label>
                </div>
                <div class="relative">
                  <input   name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b  border-black text-gray-700 focus:outline-none focus:borer-rose-600 placeholder:bg-orange-200 bg-orange-200" placeholder="Password" />
                  <label for="password" class="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">Password</label>
                </div>
                <div className='text-sm flex gap-x-1'>
                  <span className='text-red-600'>Already have an account?</span>
                  <span className='hover:underline cursor-pointer'>Login here</span>
                </div>
                <div class="relative">
                  <button class="bg-red-600 text-white rounded-md px-7 py-1">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup