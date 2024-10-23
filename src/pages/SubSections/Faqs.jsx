import React from "react";
import { RxQuestionMark } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";




const Faqs = () => {
  return (
    <>

      <div className="flex flex-col lg:flex-row items-center relative">
        <img src="/assets/star pu.png" alt="" className="absolute w-[18px] h-[20px] left-[60px] top-[50px]"/>
        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start pt-[60px] mb-[86px] px-[49px] lg:pl-[219px] lg:pr-[101px]">
          <h4 className="text-[20px] lg:text-[32px] font-bold lg:font-extrabold text-white leading-[26.6px] lg:leading-[42.56px] w-[158px]
          lg:w-[253px] h-[54px] lg:h-[86px] text-center lg:text-start mb-[6px] md:mb-[16px]">
            Frequently Ask <span className="text-[#D434FE]">Question</span>
          </h4>
          <p className="text-white text-center md:text-start leading-[27.5px] text-[12px] md:[14px] pb-[45.69px] md:w-[342px] md:h-[55px] md:mb-[68px]">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div>
            <div className="mb-[13px] md:mb-[20px] lg:mb-[25px] lg:w-[427px]">
              <div className="flex mb-2 md:mb-3 md:items-center md:justify-between">
                <p className="text-white">Can I work on a project I started before the hackaton?</p>
                <FaPlus className="text-[#D434FE] mt-[30px] md:mt-0"/>
              </div>
              <hr className="border-[#D434FE]"/>
            </div>
            <div className="mb-[13px] md:mb-[20px] lg:mb-[25px] lg:w-[427px]">
              <div className="flex mb-2 md:mb-3 md:items-center md:justify-between">
                <p className="text-white">What happens if I need help during the hackathon?</p>
                <FaPlus className="text-[#D434FE] mt-[30px] md:mt-0"/>
              </div>
              <hr className="border-[#D434FE]"/>
            </div>
            <div className="mb-[13px] md:mb-[20px] lg:mb-[25px] lg:w-[427px]">
              <div className="flex mb-2 md:mb-3 md:items-center md:justify-between">
                <p className="text-white">What happens if I don't have idea for a project?</p>
                <FaPlus className="text-[#D434FE] mt-[30px] md:mt-0"/>
              </div>
              <hr className="border-[#D434FE]"/>
            </div>
            <div className="mb-[13px] md:mb-[20px] lg:mb-[25px] lg:w-[427px]">
              <div className="flex mb-2 md:mb-3 md:items-center md:justify-between">
                <p className="text-white">Can I join a team or do I have to work with one?</p>
                <FaPlus className="text-[#D434FE] mt-[30px] md:mt-0"/>
              </div>
              <hr className="border-[#D434FE]"/>
            </div>
            <div className="mb-[13px] md:mb-[20px] lg:mb-[25px] lg:w-[427px]">
              <div className="flex mb-2 md:mb-3 md:items-center md:justify-between">
                <p className="text-white">What happens after the hackathon ends?</p>
                <FaPlus className="text-[#D434FE] mt-[30px] md:mt-0"/>
              </div>
              <hr className="border-[#D434FE]"/>
            </div>
            <div className="mb-[13px] md:mb-[20px] lg:mb-[25px] lg:w-[427px]">
              <div className="flex mb-2 md:mb-3 md:items-center md:justify-between">
                <p className="text-white">Can I work on a project I started before the Hackaton</p>
                <FaPlus className="text-[#D434FE] mt-[30px] md:mt-0"/>
              </div>
              <hr className="border-[#D434FE]"/>
            </div>
          </div>
        </div>
        <div className="mb-[49px]">
          <img src="/assets/question mark.png" alt="" className="absolute w-[30px] h-[40px] top-[720px] left-[77px] object-fill"/>
          <img src="/assets/question mark.png" alt="" className="absolute w-[40px] h-[60px] top-[685px] right-[235px] object-fill"/>
          <img src="/assets/star pu.png" alt="" className="absolute w-[10px] h-[10px] left-[200px] top-[720px]"/>
          <img src="/assets/question mark.png" alt="" className="absolute w-[30px] h-[40px] top-[718px] right-[140px] object-fill"/>
          <img src="/assets/star pu.png" alt="" className="absolute w-[7px] h-[9px] left-[95px] top-[850px]"/>
          <img src="/assets/star transparent.png" alt="" className="absolute w-[10px] h-[12px] left-[50px] top-[915px]"/>
          <img src="/assets/star.png" alt="" className="absolute w-[16px] h-[20px] right-[92px] top-[1115px]"/>
          <img src="/assets/thinking man.png" alt="Image" className="w-[400px] h-[400px] lg:w-[741px] lg:h-[741px]"/>
        </div>
      </div>
      <hr className=" bg-[#333131] border-none h-[1px]" />
    </>
  );
};

export default Faqs;
