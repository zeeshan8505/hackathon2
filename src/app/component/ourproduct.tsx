import React from 'react'
import Image from 'next/image'

const Ourproduct = () => {
  return (
    <div>
      <h1 className='text-center font-bold mt-10 text-5xl'>Our Product</h1>
      <div className='flex mt-10 justify-evenly'>
        <Image src="/Products.png" alt="product image" width={300} height={100}/>
        <Image src="/Products (1).png" alt="product image" width={300} height={100}/>
        <Image src="/Products (2).png" alt="product image" width={300} height={100}/>
        <Image src="/Products (3).png" alt="product image" width={300} height={100}/>
      </div>
      <div className='flex mt-10 justify-evenly'>
      <Image src="/Products (4).png" alt="product image" width={300} height={100}/>
      <Image src="/Products (5).png" alt="product image" width={300} height={100}/>
      <Image src="/Products (6).png" alt="product image" width={300} height={100}/>
      <Image src="/Products (7).png" alt="product image" width={300} height={100}/>
      </div>
    </div>
  )
}

export default Ourproduct
