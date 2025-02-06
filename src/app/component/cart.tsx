import React from 'react'
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";

const Cart = () => {
  return (
    <div className='flex px-20 mt-24 pb-20' >
        <div>
      <h4 className='text-2xl font-semibold'>Bag</h4>
      <div className='flex'>
      <Image className='mt-10' src="/Image (2).png" alt="image" width={200} height={150}/>
      <div className='mt-10 ml-10'>
        <div className='flex space-x-96'>
      <p className='text-2xl'>Libary Stool Chair</p>
      <p>MRP:$99</p>
      </div>
      <p className='mt-10 text-xl'>Ashen Slate/Cobalt Bliss</p>
      <div className='flex mt-2 text-xl space-x-2'>
        <div>
          <div className='flex'>
      <p>Size</p>
      <p className='ml-4'>L</p>
      <p className='ml-12'>Quantity</p>
      <p className='ml-4'>1</p>
      </div>
      </div>
      
      </div>
      <div className='flex mt-10 space-x-4'>
      <FaRegHeart  size={30}/>  
      <BsTrash3  size={30}/>
      </div>
      </div>
</div>
      <div className='border-t border-[#E5E5E5] px-[500px] mt-10'></div>
      <div className='flex'>
      <Image className='mt-10' src="/Frame.png" alt="image" width={200} height={150}/>
      <div className='mt-10 ml-10'>
      <div className='flex space-x-96'>
      <p className='text-2xl'>Libary Stool Chair</p>
      <p>MRP:$99</p>
      </div>
 
      <p className='mt-10 text-xl'>Ashen Slate/Cobalt Bliss</p>
      <div className='flex mt-2 text-xl space-x-2'>
        <div>
          <div className='flex'>
      <p>Size</p>
      <p className='ml-4'>L</p>
      <p className='ml-12'>Quantity</p>
      <p className='ml-4'>1</p>
      </div>
      </div>
      
      </div>
      <div className='flex mt-10 space-x-4'>
      <FaRegHeart  size={30}/>  
      <BsTrash3  size={30}/>
      </div>
      </div>
</div>
      </div>
      <div>
      <h4 className='font-semibold text-2xl'>Summary</h4>
      <div className='flex gap-80 mt-10 text-xl'>
      <p>Subtotal</p>
      <p>$198.00</p>
      </div>
      <div className='flex gap-40 text-xl mt-4 border-b border-[#E5E5E5] pb-6'>
      <p>Estimated Delivery & Handling</p>
      <p>Free</p>
      </div>
      <div className='flex mt-5 gap-96 border-b border-[#E5E5E5] pb-6'>
      <p>Total</p>
      <p>$198.00</p>
      </div>
      <button className='mt-10 border rounded-full bg-[#029FAE] px-36 py-6 text-white text-xl ml-8'>Member Checkout</button>
      </div>
      <div>
      
      
      
      </div>
    </div>
  )
}

export default Cart
