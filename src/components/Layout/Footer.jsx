import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className='mx-[77px] my-[51px]'>
        <div>
          <img src="\assets\getlinked-logo.png" alt="" />
          <p className='text-white text-[12px] leading-[20.69px] mt-[12px] w-[271px] mb-[39px]'>
            Getlinked Tech Hackathon is a technology innovation program established by a group of organizations 
            with the aim of showcasing young and talented individuals in the field of technology
          </p>
          <div className='flex justify-between items-center w-[200px]'>
            <span className='text-white text-[12px]'>Terms of Use</span>
            <span className='border-[2px] border-[#D434FE] h-[20px]'></span>
            <span className='text-white text-[12px]'>Privacy Policy</span>
          </div>
        </div>
        <div className='mt-[32px]'>
          <p className='text-[#D434FE] text-[14px] font-semibold mb-2'>Useful Links</p>
          <ul className='flex flex-col gap-3 text-white text-[12px] mb-4'>
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
          </ul>
          <div className='flex gap-[16px] items-center mb-[61px]'>
            <span className='text-[#D434FE] text-[16px]'>Follow us</span>
            <div className='flex w-[129px] justify-between text-[24px] text-white'>
              <FaInstagram />
              <FaXTwitter />
              <FaFacebookF />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <span className='text-[#D434FE] text-[14px] font-semibold'>Contact Us</span>
        <div className='flex text-white text-[14px] items-center gap-[16px] mt-4'>
          <FaPhoneVolume />
          <p>+234  6707653444</p>
        </div>
        <div className='flex text-white items-center gap-[16px] mt-4'>
          <IoLocationSharp className='text-[18px]'/>
          <p className='w-[120px] text-[14px]'>27,Alara Street Yaba 100012 Lagos State</p>
        </div>
        <p className='text-[12px] text-white text-center mt-[60px]'>All rights reserved. © getlinked Ltd.</p>
      </div>
    </>
  )
}

export default Footer