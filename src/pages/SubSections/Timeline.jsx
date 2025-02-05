import { data } from 'autoprefixer'
import React from 'react'

const schedule = [
  {
    image: "/assets/Line 9.svg",
    listNumber: "1",
    title: "Hackathon Announcement",
    description: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    date: "November 18, 2023"
  },
  {
    image: "/assets/Line 9.svg",
    listNumber: "2",
    title: "Teams Registration begins",
    description: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023"
  },
  {
    image: "/assets/Line 9.svg",
    listNumber: "3",
    title: "Announcement of the accepted teams and ideas",
    description: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023"
  },
  {
    image: "/assets/Line 9.svg",
    listNumber: "4",
    title: "Getlinked Hackathon 1.0 Offically Begins",
    description: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023"
  },
  {
    image: "/assets/Line 9.svg",
    listNumber: "5",
    title: "Demo Day",
    description: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023"
  },
  {
    image: "/assets/Line 9.svg",
    listNumber: "6",
    title: "Demo Day",
    description: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023"
  },
]


const Timeline = ({image, listNumber, title, description, date}) => {
  return (
    <>
      <div className='mx-12'>
        <div className='flex flex-col justify-center items-center mt-[50px] relative'>
          <h3 className='text-[25px] md:text-[32px] text-white font-bold text-center mb-4'>Timeline</h3>
          <p className='text-white text-[14px] text-center w-[293px] md:w-[346px]'>Here is the breakdown of the time we
          anticipate using for the upcoming event.</p>
          <img src="/assets/star pu.png" alt="" className='absolute top-[130px] left-[47px] w-[14px] h-[16px]'/>
        </div>
        <div className='mt-20 md:hidden'>
          {schedule.map((event, index) => {
              return (  
                <div className='flex justify-center gap-4 mt-4 ' key={index}>
                  <div className='flex flex-col items-center gap-2'>
                    <img src={event.image} alt="" className='w-[2px]' />
                    <span className='w-[25px] h-[25px] bg-gradient-to-r from-[#903AFF] to-[#D434FE] text-white inline-block text-center rounded-full'>{event.listNumber}</span>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p className='text-[#D434FE] text-[12px] font-bold'>{event.title}</p>
                    <p className='text-white text-[12px]'>{event.description}</p>
                    <p className='text-[#D434FE] text-[12px] font-bold'>{event.date}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          {schedule.map((event, index) => {
            return (
            <div className='hidden md:flex gap-20 items-end justify-center mx-12 mt-10'>
              <div className='flex flex-col w-[511px] text-right'>
                <p className='text-[#D434FE] text-[24px] font-bold mb-2'>{event.title}</p>
                <p className='text-white text-[14px]'>{event.description}</p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <img src={event.image} alt="" className='w-[2px]' />
                <span className='w-[25px] h-[25px] bg-gradient-to-r from-[#903AFF] to-[#D434FE] text-white inline-block text-center rounded-full'>{event.listNumber}</span>
              </div>
              <p className='text-[#D434FE] text-[24px] font-bold w-[436px]'>{event.date}</p>
            </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Timeline