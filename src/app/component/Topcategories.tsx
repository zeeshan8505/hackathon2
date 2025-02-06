import React from 'react'
import Image from 'next/image'

const Topcategories = () => {
  return (
    <div>
      <h1 className='font-bold text-5xl mt-5'>Top categories</h1>
      <div className='flex justify-evenly mt-8'>
      <Image src="/Category.png" alt='image' width={400} height={400}/>
      <Image src="/Category (1).png" alt='image' width={400} height={400}/>
      <Image src="/Category (2).png" alt='image' width={400} height={400}/>
      </div>
      <div className='mt-12 ml-16' >
      <Image src="/hot-category.png" alt="image" width={1500} height={300}/>
      </div>
    </div>
  )
}

export default Topcategories
