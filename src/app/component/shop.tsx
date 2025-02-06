import React from 'react'
import Image from 'next/image'
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Shop = () => {
  return (
    <div className='mt-20'>
        <div className='flex mx-24'>
            <div className='flex-1'>
      <Image src="/Image (1).png" alt="image" width={700} height={100}/>
      </div>
      <div className='flex-1 ml-16'>
      <h1 className='text-6xl font-bold px-12 pr-72'>Library Stool Chair</h1>
      <button className='mt-10 border rounded-full bg-[#029FAE] px-4 py-2 text-white text-xl ml-12'>$20.00 USD</button>
      <p className='pr-80 ml-12 border-t mt-10 pt-10 text-[#c5c2da]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      <button className='flex mt-10 border rounded bg-[#029FAE] px-8 py-4 text-white text-2xl ml-12 font-semibold gap-4'><HiOutlineShoppingCart className='mt-1 font-bold'/>Add To Cart</button>
      </div>
      </div>
      <div className='flex justify-between px-4 mt-24 text-4xl font-semibold'>
      <h1>FEATURED PRODUCTS</h1>
      <button className='underline'>View all</button>
      </div>
      <div className='flex mt-20 justify-evenly pb-20'>
      <Image src="/Group 112.png" alt='image' width={300} height={100}/>
      <Image src="/Group 113.png" alt='image' width={300} height={100}/>
      <Image src="/Group 114.png" alt='image' width={300} height={100}/>
      <Image src="/Group 115.png" alt='image' width={300} height={100}/>
      <Image src="/Group 116.png" alt='image' width={300} height={100}/>
      </div>
    </div>
  )
}

export default Shop
