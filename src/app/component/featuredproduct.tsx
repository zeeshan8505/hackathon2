import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Featuredproduct = () => {
  return (
    <div>
        
      <h1 className=' font-bold text-4xl mt-4'>Featuredproduct</h1>
  
      <section className='grid grid-cols-4'>
      <div >
      <div 
      style={{
        backgroundImage: "url('/Image.png')",
        width: "100%",
        height: "50vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover"
      }}>
        <span className=''>New</span>
        
        </div>
        <div className='flex justify-between pr-16'>
        <div>
        <p>Library Stool Chair</p>
        <h2>$20</h2>
        </div>
        <div>
        <FaShoppingCart />
        </div>
        </div>
        </div>

<div>
        <div 
      style={{
        backgroundImage: "url('/Image (1).png')",
        width: "100%",
        height: "50vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover"
      }}>
        <span className=''>Sale</span>
        </div>
        <div className='flex justify-between pr-16'>
        <div>
        <p>Library Stool Chair</p>
        <h2>$20</h2>
        </div>
        <div>
        <FaShoppingCart />
        </div>
        </div>
        </div>
        <div>
        <div 
      style={{
        backgroundImage: "url('/Image (2).png')",
        width: "100%",
        height: "50vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover"
      }}>
        </div>
        <div className='flex justify-between pr-16'>
        <div>
        <p>Library Stool Chair</p>
        <h2>$20</h2>
        </div>
        <div>
        <FaShoppingCart />
        </div>
        </div>
        </div> 
        

        <div>
        <div 
      style={{
        backgroundImage: "url('/Image (3).png')",
        width: "100%",
        height: "50vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover"
      }}> 
        </div>
        <div className='flex justify-between pr-16'>
        <div>
        <p>Library Stool Chair</p>
        <h2>$20</h2>
        </div>
        <div>
        <FaShoppingCart />
        </div>
        </div>
        </div>
        </section>

        </div>
      
       
        
        
            
  )
}

export default Featuredproduct
