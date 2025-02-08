import React from 'react'

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
          <span className='text-[#D434FE] text-[12px]'>Follow us</span>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer