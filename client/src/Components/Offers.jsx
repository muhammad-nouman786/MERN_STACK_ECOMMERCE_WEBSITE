import React from 'react'
import exclusive_image from './Assets/Frontend_Assets/exclusive_image.png'
const Offers = () => {
  return (
    <section className="bg-gradient-to-t from-amber-300 to-orange-500 mx-32 mt-20">
	<div className="flex flex-col justify-center mx-auto sm:py-12 lg:py-4 lg:flex-row md:justify-around">
		<div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl uppercase text-red-700">Exclusive Offer
				For You 
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 text-white">Only on best sellers
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-red-700 text-white">Check Now</a>
				</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={exclusive_image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  )
}

export default Offers