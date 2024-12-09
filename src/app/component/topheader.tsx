import React from 'react'

const Topheader = () => {
  return (
    <div className='flex justify-between bg-indigo-950 text-white text-sm py-2 px-4 items-center '>
        <div className='font-semibold'>
      Free shipping on all orders over $50
      </div>
      <div className='flex space-x-4'>
        <span className="hover:underline cursor-pointer">Eng</span>
        <span className="hover:underline cursor-pointer">FAQs</span>
        <span className="hover:underline cursor-pointer">Need Help</span>
        </div> 
    </div>
  )
}

export default Topheader
