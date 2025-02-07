import React from 'react'
import { IoIosCheckmark } from "react-icons/io";

const PrivacyPolicy = () => {
  return (
    <>
        <div className='mt-20 mx-7 mb-40 md:mx-[160px]'>
          <div className='flex flex-col justify-center items-center md:flex-row md:items-start md:justify-between'>
            <div className='flex'>
              <div>
              <div className='flex flex-col items-center mb-7 md:items-start'>
                <h4 className='text-[20px] text-white font-bold leading-7 text-center w-[200px]
                md:text-[32px] md:w-[310px] md:text-start md:leading-[39.36px] md:mb-[17px]
                '>Privacy Policy and <span className='text-[#D434FE]'>Terms</span></h4>
                <p className='text-white leading-[27.5px] text-[12px] text-center
                md:text-[14px] md:text-start'>Last updated on September 12, 2023</p>
              </div>
              <div className='flex flex-col items-center md:items-start'>
                  <p className='text-white leading-[27.5px] text-[12px] text-center w-[289px]
                  md:text-start md:text-[14px] md:w-[438px]'>
                    Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
                  </p>
                  <div className='mt-8 border-[1px] border-[#D434FE] rounded-lg px-6 py-11
                  md:px-[72px] md:py-[59px]'>
                    <p className='text-white leading-[28.13px] text-[12px] text-center w-[268px] mb-5
                    md:w-[425px] md:text-justify md:text-[14px] md:mb-6'>
                      At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information.
                      This Privacy Policy outlines how we collect,use, disclose, and safeguard your data when you participate in our tech hackathon 
                      event. By participating in our event, you consent to the practices described in this policy.
                    </p>
                    <h4 className='text-[13px] text-[#D434FE] font-bold leading-7
                    md:text-[16px] md:leading-9'>Licensing Policy</h4>
                    <p className='text-white text-[12px] font-bold md:text-[14px] md:leading-[30.3px]'>Here are terms of our Standard License:</p>
                    <div className='pt-5 flex gap-3 items-start md:pt-6'>
                      <div className='bg-[#2DE100] w-[17px] h-[17px] flex items-center justify-center rounded-full'><IoIosCheckmark className='text-white text-[30px] font-bold'/></div>
                      <p className='text-[12px] text-white w-[218px] md:text-[14px] md:w-[401px]'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                    </div>
                    <div className='pt-5 flex gap-3 items-start'>
                      <div className='bg-[#2DE100] w-[17px] h-[17px] flex items-center justify-center rounded-full'><IoIosCheckmark className='text-white text-[30px] font-bold'/></div>
                      <p className='text-[12px] text-white w-[218px] md:text-[14px] md:w-[401px]'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                    </div>
                    <div className='flex items-center justify-center pt-10'>
                      <button className="w-[120px] h-[40px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] rounded-[4px] 
                      text-white md:h-[53px]">Read More</button>
                    </div>
                  </div>
              </div>
              </div>
              </div>
              <div className='mt-[48px] bg-[url("/assets/shield-lock.svg")] bg-no-repeat bg-center relative w-[249px] h-[311px] md:hidden'>
                <img src="/assets/person-unlock.svg" alt="" className='absolute w-[262px] h-[351px] top-[80px]'/>
              </div>
              <div className='hidden md:block mt-[48px] bg-[url("/assets/shield-big.svg")] bg-no-repeat bg-center relative w-[249px] h-[311px]
              md:w-[530px] md:h-[648px] md:mt-0'>
                <img src="/assets/person-unlock.svg" alt="" className='absolute w-[262px] h-[351px] top-[80px] md:w-[559px] md:h-[749px] md:top-[170px]'/>
              </div>
              
          </div>
        </div>

      <hr className=" bg-[#333131] border-none h-[1px]" />
    </>
  )
}

export default PrivacyPolicy