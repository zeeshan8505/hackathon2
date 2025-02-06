import React from 'react'
import Image from 'next/image'

const Product = () => {
  return (
    <div>
      <h1 className='text-center font-bold mt-10 text-5xl'>All Product</h1>
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
            <div className='flex mt-10 justify-evenly'>
            <Image src="/Products (4).png" alt="product image" width={300} height={100}/>
            <Image src="/Products (1).png" alt="product image" width={300} height={100}/>
            <Image src="/Products (2).png" alt="product image" width={300} height={100}/>
            <Image src="/Products (7).png" alt="product image" width={300} height={100}/>
            </div>

            <div className='mt-64 bg-[#1E28320D] text-center pb-20'>
            <h1 className='text-5xl font-semibold text-center pt-20'>Or subscribe to the newsletter</h1>
            <input className='font-black border-b border-black pt-10 w-[600px] bg-[#1e283200]' type="email" placeholder="Email Address..." />
            <button className='border-b border-black ml-4 w-[100px]'>SUBMIT</button>
            <h1 className='text-5xl font-semibold text-center pt-10'>Follow products and discounts on Instagram</h1>
            <div className='flex justify-evenly mt-12'>
            <Image src="/Products (4).png" alt="product image" width={300} height={100}/>
            <Image src="/Products (1).png" alt="product image" width={300} height={100}/>
            <Image src="/Products (2).png" alt="product image" width={300} height={100}/>
            <Image src="/Products (7).png" alt="product image" width={300} height={100}/>
            <Image src="/Products (5).png" alt="product image" width={300} height={100}/>
            </div>
            </div>

    </div>
  )
}

export default Product
