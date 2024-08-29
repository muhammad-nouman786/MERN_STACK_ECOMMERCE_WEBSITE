import React from 'react'
import data_products from "../Components/Assets/Frontend_Assets/data"
import Item from "../Components/Item"

const RelatedProducts = () => {
  return (
    <>
    <div className="text-center p-10">
      <h1 className="font-bold md:text-4xl text-2xl uppercase">
        Related Products
      </h1>
    </div>

    <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 md:grid-cols-3">
      {data_products.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        );
      })}
    </div>
  </>
  )
}

export default RelatedProducts