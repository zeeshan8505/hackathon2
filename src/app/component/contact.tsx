import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { GrTrophy } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <div>
      <h1 className='mt-20 text-center'>Get In Touch With Us</h1>
      <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      <div className='grid grid-cols-2'>
        <div>
            <FaLocationDot />
            <h1>Address</h1>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
            <MdCall />
            <h1>Phone</h1>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
            <FaClock />
            <h1>Working Time</h1>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
        </div>
        <div>
            <form>
                <label>Your Name</label>
                <input type="text" placeholder='Abc'/>
                <label>Email Address</label>
                <input type="email" placeholder='Abc@gmail.com'/>
                <label>Subject</label>
                <input type="text" placeholder='This is an optional'/>
                <label>Messaage</label>
                <input type="text" placeholder='Hi! i would like to ask about'/>
                <button>submit</button>
            </form>
        </div>
        
      </div>
      <div>
      <GrTrophy />
      <h2>High Quality</h2>
      <p>crafted from top materials</p>
      <SiTicktick/>
      <h2>Warranty Protection</h2>
      <p>Over 2 years</p>
      <BiSupport/>
      <h2>24 / 7 Support</h2>
      <p>Dedicated support</p>
        </div>
    </div>
  )
}

export default Contact
