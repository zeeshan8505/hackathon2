import React from 'react'
import Image from 'next/image'

const companylogo = () => {
  return (
    <div className='flex space-x-32'>
      <Image src="/Logo.png" alt="logo" width={100} height={100} />
      <Image src="/Logo (1).png" alt="logo" width={100} height={100} />
      <Image src="/Logo (2).png" alt="logo" width={100} height={100} />
      <Image src="/Logo (3).png" alt="logo" width={100} height={100} />
      <Image src="/Logo (4).png" alt="logo" width={100} height={100}/>
      <Image src="/Logo (5).png" alt="logo" width={100} height={100}/>
      <Image src="/Logo (6).png" alt="logo" width={100} height={100}/>
    </div>
  )
}

export default companylogo