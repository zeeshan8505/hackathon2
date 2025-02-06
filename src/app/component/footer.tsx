import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { RiPinterestFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mt-20 justify-evenly flex'>
        <div>
        <div className='flex'>
      <Image src="/Logo Icon.png" alt="logo" width={50} height={100} />
      <h1 className='text-2xl mt-1 ml-2 font-semibold'>Comforty</h1>
      </div>
      <p className='mt-5 text-[#9A9CAA]'>Vivamus tristique odio sit amet velit semper,</p>
        <p className='text-[#9A9CAA]'> eu posuere turpis interdum. </p>
        <p className='text-[#9A9CAA]'>Cras egestas purus </p>
      <div className='flex mt-5 space-x-4'>
      <FaFacebook />
      <IoLogoTwitter />
      <FaInstagram />
      <RiPinterestFill />
      <FaYoutube />
      </div>
      </div>    
      <div>
        <h5 className='text-[#9A9CAA]'>CATAGORY</h5>
        <ul className='mt-2'>
            <li>Sofa</li>
            <li className='mt-1'>Armchair</li>
            <li className='mt-1'>Wing Chair</li>
            <li className='underline text-[#007580] mt-1'>Desk Chair</li>
            <li className='mt-1'>Wooden Chair</li>
            <li className='mt-1'>Park Bench</li>
        </ul>
      </div>
      <div>
        <h5 className='text-[#9A9CAA]'>SUPPORT</h5>
        <ul>
            <li className='mt-1'>Help & Support</li>
            <li  className='mt-1'>Tearms & Conditions</li>
            <li  className='mt-1'>Privacy Policy</li>
            <li  className='mt-1'>Help</li>
        </ul>
      </div>
      <div>
        <h5 className='text-[#9A9CAA]'>NEWSLETTER</h5>
        <input type="text" placeholder='Your Email' className='border mt-2 px-16 py-3 rounded-xl' />
        <button className='ml-1 px-5 py-3 border bg-[#029FAE] rounded-xl text-white'>Subscribe</button>
        <p className='mt-2 text-[#9A9CAA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <p className='text-[#9A9CAA]'>  Nullam tincidunt erat enim.</p>
      </div>
    </div>
  )
}

export default Footer
