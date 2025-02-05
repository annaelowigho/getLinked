import React from 'react'

const Partners = () => {
  return (
    <>
        <div className='relative mt-10 md:mt-20'>
            <img src="/assets/purple flare left.svg" alt="" className='absolute top-[-120px] -z-20'/>
            <div className='px-[15px] md:px-[128px] flex flex-col items-center mb-10 md:mb-20'>
                <h4 className='text-white text-[20px] text-center font-bold leading-[28px]
                md:text-[32px] md:mb-4'>Partners and Sponsors</h4>
                <p className='text-white text-center text-[12px] w-[286px] pt-3
                md:w-[452px] md:text-[14px] md:leading-[28px] '>
                    Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
                </p>
                <div className='w-full border-[2px] border-[#D434FE] h-[148.59px] mt-10 py-[10px] px-[20px] rounded-lg
                 grid grid-cols-[auto,5px,auto,5px,auto] items-center md:py-[144px] md:px-[179px] lg:h-[560px]'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src="/assets/sponsor1.svg" alt="" className='md:w-[120.56px] md-h-[113.95px]'/>
                        <img src="/assets/Line 18.svg" alt=""  className='md:w-[237.3px]'/>
                        <img src="/assets/sponsor4.svg" alt="" className='md:w-[147.03px] md:h-[109.54px]'/>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5 md:gap-10'>
                        <img src="/assets/Line 17.svg" alt="" className='w-[5px] h-[50px] md:h-[130px] object-cover'/>
                        <img src="/assets/Line 17.svg" alt="" className='w-[5px] h-[50px] md:h-[130px] object-cover'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src="/assets/sponsor2.svg" alt="" className='md:w-[213.19px] md:h-[40.43px]'/>
                        <img src="/assets/Line 18.svg" alt=""  className='md:w-[237.3px]'/>
                        <img src="/assets/sponsor2.svg" alt="" className='md:w-[213.19px] md:h-[40.43px]'/>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5 md:gap-10'>
                        <img src="/assets/Line 17.svg" alt="" className='w-[5px] h-[50px] md:h-[130px] object-cover'/>
                        <img src="/assets/Line 17.svg" alt="" className='w-[5px] h-[50px] md:h-[130px] object-cover'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src="/assets/sponsor3.svg" alt="" className='md:w-[131.59px] md:h-[107.33px]'/>
                        <img src="/assets/Line 18.svg" alt=""  className='md:w-[237.3px]'/>
                        <img src="/assets/sponsor6.svg" alt="" className='md:w-[200px] md:h-[107px]'/>
                    </div>
                </div>
            </div>
        </div>
        <hr className=" bg-[#333131] border-none h-[1px]" />
    </>
  )
}

export default Partners