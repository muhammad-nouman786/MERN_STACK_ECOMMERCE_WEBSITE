import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item'

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div>
     <img src={props.banner} alt="" />
     <section class="py-8 antialiased md:py-12">
  <div class="mx-auto max-w-screen-xl md:px-28 2xl:px-0">
    <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
      <div>
        <h2 class="mt-3 text-xl">Showing 1-12 out of 36 products</h2>
      </div>
      <div class="flex items-center space-x-4">
        <button id="sortDropdownButton1" data-dropdown-toggle="dropdownSort1" type="button" class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none sm:w-auto">
          <svg class="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4" />
          </svg>
          Sort
          <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>

      </div>
    </div>
    <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 md:grid-cols-3 ">
      {
        all_products.map((item)=>{
          if(props.category===item.category){
            return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}  />
          }
          return null
        })
      }
    </div>
    <div class="w-full text-center">
      <button type="button" class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium hover:text-white hover:bg-red-600 focus:outline-none">Show more</button>
    </div>
  </div>
</section>
    </div>
  )
}

export default ShopCategory