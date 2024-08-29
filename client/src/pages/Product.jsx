import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from "react-router-dom"
import BreadCrumbs from '../Components/BreadCrumbs'
import ProductDisplay from '../Components/ProductDisplay'
import RelatedProducts from '../Components/RelatedProducts'
const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_products.find((e)=>e.id===Number(productId))
  return (
    <div className='md:px-40 md:py-16 p-10'>
      <BreadCrumbs product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </div> 
  )
}

export default Product