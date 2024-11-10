import BestSelling from '@/components/best-selling/BestSelling'
import ProductDetails from '@/components/product-details/ProductDetails'
import React from 'react'

async function Page({params}: {params : Promise<{id : string}>}) {
    const {id} = await params
  return (
    <>
      <ProductDetails cardid={id}/>
      <BestSelling/>
    </>
  )
}

export default Page