import React from 'react'

const Results = () => {
  return (
    <>
        <div className='mt-[80px] bg-[url(/assets/bg-rewards.svg)] bg-cover bg-center bg-no-repeat'>
            <div>
                <div className='pt-5 md:pt-10 flex flex-col items-center justify-center px-[13px]'>
                    <p className='text-white text-[20px] md:text-[32px] font-bold w-[109px] md:w-[200px] text-center leading-7 md:leading-8'>Prizes and <span className='text-[#D434FE]'>Rewards</span></p>
                    <p className='text-white text-center md:text-start leading-8 mt-2 md:mt-3 md:text-[16px]'>Highlight of the prizes or rewards for winners and for participants.</p>
                </div>
                <div className='flex flex-col md:flex-row md:justify-center md:gap-10 items-center mt-10'>
                    <img src="/assets/reward-cup.svg" alt="reward-cup" className='md:w-[548px]'/>
                    <div className='mt-14 md:mt-20 mb-5 md:mb-10'>
                        <div className='flex gap-2'>
                            <div className='mt-14 h-[150px] bg-[#281041] border-[2px] border-[#D434FE] px-4 py-8 rounded-lg relative flex flex-col items-center justify-center
                            md:h-[296px] md:w-[212px]'>
                                <img src="/assets/second-runner-badge.svg" alt="2nd runner badge" 
                                className='absolute bottom-[110px] md:bottom-[200px] md:w-[179px] md:h-[180px]'/>
                                <p className='text-white text-[12px] md:text-[24px] font-bold md:font-semibold leading-4 md:leading-[40px] w-[47px] md:w-[92px] text-center mt-5 md:mt-16'><span className='md:text-[36px] md:font-bold'>2nd</span> Runner</p>
                                <p className='text-[14px] md:text-[32px] font-bold text-[#D434FE] leading-8 md:mt-2'>N300,000</p>
                            </div>
                            <div className='mt-16 md:mt-[70px] h-[150px] bg-[#281041] border-[2px] border-[#903AFF] px-4 py-8 rounded-lg relative flex flex-col items-center justify-center
                            md:h-[296px] md:w-[212px]'>
                                <img src="/assets/gold_medal 1.svg" alt="2nd runner badge" 
                                className='absolute bottom-[110px] md:w-[320px] md:h-[320px] md:bottom-[180px]'/>
                                <p className='text-white text-[12px] md:text-[24px] font-bold md:font-semibold leading-4 md:leading-[40px] w-[47px] md:w-[92px] text-center mt-5 md:mt-16'><span className='md:text-[36px] md:font-bold'>1st</span> Runner</p>
                                <p className='text-[14px] md:text-[32px] font-bold text-[#903AFF] leading-8 md:mt-2'>N400,000</p>
                            </div>
                            <div className='mt-14 h-[150px] bg-[#281041] border-[2px] border-[#D434FE] px-4 py-8 rounded-lg relative flex flex-col items-center justify-center
                            md:h-[296px] md:w-[212px]'>
                                <img src="/assets/bronze_medal 1.svg" alt="2nd runner badge" 
                                className='absolute bottom-[110px] md:bottom-[200px] md:w-[179px] md:h-[180px]'/>
                                <p className='text-white text-[12px] md:text-[24px] font-bold md:font-semibold leading-4 md:leading-[40px] w-[47px] md:w-[92px] text-center mt-5 md:mt-16'><span className='md:text-[36px] md:font-bold'>3rd</span> Runner</p>
                                <p className='text-[14px] md:text-[32px] font-bold text-[#D434FE] leading-8 md:mt-2'>N150,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Results