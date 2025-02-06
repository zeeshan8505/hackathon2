import React from 'react'

const Topheader = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between bg-indigo-950 text-white text-sm py-2 px-4 items-center'>
        <div className='font-semibold mb-2 sm:mb-0'>
          Free shipping on all orders over $50
        </div>
        <div className='flex space-x-4 sm:space-x-6'>
          <a href="#" className="hover:underline cursor-pointer" aria-label="Change language to English">Eng</a>
          <a href="#" className="hover:underline cursor-pointer" aria-label="Frequently Asked Questions">FAQs</a>
          <a href="#" className="hover:underline cursor-pointer" aria-label="Contact for Help">Need Help</a>
        </div>
    </div>
  )
}

export default Topheader
