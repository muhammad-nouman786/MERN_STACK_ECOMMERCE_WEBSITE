import React from 'react'
const Hero = () => {
  return (

<section
  className="relative bg-[url(/hero.jpg)] bg-cover bg-right-top bg-no-repeat"
>

  <div
    className="relative z-20 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-32"
  >
    <div className="max-w-xl text-left">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
        SUMMER LOVE

        <strong className="block mt-2 font-extrabold text-red-600"> THE FRESHEST SUMMER STYLES </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quidem!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 sm:w-auto"
        >
          Explore More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero