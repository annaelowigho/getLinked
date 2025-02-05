import React from 'react'
import { IoIosCheckmark } from "react-icons/io";

const PrivacyPolicy = () => {
  return (
    <>
      <div className='mt-20 mx-7'>
          <div>
              <div className='flex flex-col items-center mb-7'>
                <h4 className='text-[20px] text-white font-bold leading-7 text-center w-[200px]'>Privacy Policy and <span className='text-[#D434FE]'>Terms</span></h4>
                <p className='text-white leading-[27.5px] text-[12px] text-center'>Last updated on September 12, 2023</p>
              </div>
              <div className='flex flex-col items-center'>
                  <p className='text-white leading-[27.5px] text-[12px] text-center w-[289px]'>
                    Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
                  </p>
                  <div className='mt-8 border-[1px] border-[#D434FE] rounded-lg px-6 py-11'>
                    <p className='text-white leading-[28.13px] text-[12px] text-center w-[268px] mb-5'>
                      At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information.
                      This Privacy Policy outlines how we collect,use, disclose, and safeguard your data when you participate in our tech hackathon 
                      event. By participating in our event, you consent to the practices described in this policy.
                    </p>
                    <h4 className='text-[13px] text-[#D434FE] font-bold leading-7'>Licensing Policy</h4>
                    <p className='text-white text-[12px] font-bold'>Here are terms of our Standard License:</p>
                    <div className='pt-5 flex gap-3 items-start'>
                      <div className='bg-[#2DE100] w-[17px] h-[17px] flex items-center justify-center rounded-full'><IoIosCheckmark className='text-white text-[30px] font-bold'/></div>
                      <p className='text-[12px] text-white w-[218px]'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                    </div>
                    <div className='pt-5 flex gap-3 items-start'>
                      <div className='bg-[#2DE100] w-[17px] h-[17px] flex items-center justify-center rounded-full'><IoIosCheckmark className='text-white text-[30px] font-bold'/></div>
                      <p className='text-[12px] text-white w-[218px]'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                    </div>
                    <div className='flex items-center justify-center pt-10'>
                      <button className="w-[120px] h-[40px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] rounded-[4px] 
                      text-white md:h-[53px]">Read More</button>
                    </div>
                  </div>
              </div>
          </div>
          <div className='bg-[url(/assets/shield-lock.svg)] bg-no-repeat bg-center relative w-[249px] h-[311px]'>
            <img src="/assets/person-unlock.svg" alt="" className='absolute'/>
          </div>
      </div>
    </>
  )
}

export default PrivacyPolicy