import React from "react";
import BigIdea from "../SubSections/BigIdea";
import Rules from "../SubSections/Rules";
import JudgingCriteria from "../SubSections/JudgingCriteria";
import Faqs from "../SubSections/Faqs";
import Timeline from "../SubSections/Timeline";

const Homepage = () => {
  return (
    <>
      <section id="hero">
        {/* imtro text and line stroke */}
        <div>
          <h1
            className="text-bold text-[18px] italic text-center text-white 
            pt-[52px] md:pr-[55px] md:text-[36px] md:pt-[32px] md:text-right"
          >
            Igniting a Revolution in HR Innovation
          </h1>
          <div className="flex flex-col md:flex-row relative">
            <img
              src="\assets\star.png"
              alt=""
              className="w-[10px] h-[12px] md:w-[26px] md:h-[32px] absolute left-[126px] top-[18px]"
            />
            <img
              src="\assets\line-one.png"
              alt=""
              className="h-[7px] md:h-[15px] w-[115px] md:w-[253px] flex-shrink-0 absolute pt-[2px] left-[239px] md:left-[1250px] md:mt-[2px]"
            />
          </div>
        </div>

        {/* MAN WITH VIRTUAL GLASSES AND TEXT */}
        <div className="relative flex flex-col  md:flex-row md:pl-[128px] mt-[70px] md:gap-[90px]">
          <div className="md:mt-[99px]">
            <div className="flex items-center justify-center md:justify-start md:items-start flex-col">
              <img
                src="/assets/Creative-bulb.png"
                alt=""
                className="w-[18px] h-[36px] md:w-[53px] md:h-[73px] absolute left-[279px] md:left-[660px] right-[99px] top-[-18px] md:top-[60px]"
              />
              <h4 className="text-white text-[32px] md:text-[80px] font-bold md:w-[722px] md:h-[98px]">
                getlinked Tech
              </h4>
            </div>
            <div className="flex md:mb-7 items-center justify-center md:justify-start">
              <div>
                <h4 className="text-white text-[32px] md:text-[80px] font-bold md:w-[600px] md:h-[98px]">
                  Hackathon <span className="text-[#D434FE]">1.0</span>
                </h4>
              </div>
              <img
                src="/assets/chain.png"
                alt=""
                className="w-[32.797px] h-[32.797px] md:w-[86px] md:h-[86px]"
              />
              <img
                src="/assets/boom.png"
                alt=""
                className="w-[22.119px] h-[22.119px] md:w-[58px] md:h-[58px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start mt-[9px]">
              <p
                className="w-[264px] h-[44px] text-[13px] text-white text-center leading-[21.58px] mb-[24px] md:text-start md:text-[20px]
            md:w-[522px] md:h-[66px] md:mb-[41px]"
              >
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <button
                className="w-[172px] h-[53px] bg-gradient-to-r from-[#903AFF] to-[#D434FE] rounded-[4px] text-white 
            mb-[14.16px] md:mb-[77px]"
              >
                Register
              </button>
              <span className="text-white text-[48px] md:text-[64px]">
                00<span className="text-[24px] pl-0">H</span> 00
                <span className="text-[24px] pl-0">M</span> 00
                <span className="text-[24px] pl-0">S</span>
              </span>
            </div>
          </div>
          <div>
            <img
              src="\assets\man-virtual-glasses 1.png"
              alt=""
              className="relative w-[419.669px] h-[362.395px] md:w-[828px] md:h-[715px]"
            />
            <img
              src="/assets/galaxy.png"
              alt=""
              className="w-[338.067px] h-[324.889px] absolute bottom-[40px] left-[50px] 
          md:bottom-[90px] md:left-[900px] md:w-[667px] md:h-[641px] object-cover"
            />
          </div>
        </div>
        <hr className=" bg-[#333131] border-none h-[1px]" />
      </section>

      <BigIdea />
      <Rules />
      <JudgingCriteria />
      <Faqs />
      <Timeline />
    </>
  );
};

export default Homepage;
