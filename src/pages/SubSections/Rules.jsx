import React from "react";

const Rules = () => {
  return (
    <>
      <div className="relative">
        <img
          src="/assets/Purple-Lens-Flare.png"
          alt=""
          className="absolute md:bottom-[2px] md:right-[600px] md:w-[900px] md:h-[500px]"
        />
        <div
          className="md:mt-0 flex flex-col-reverse px-[60px] md:px-0 gap-[10px] relative
      md:flex-row"
        >
          <div className="flex flex-col items-center md:items-start md:pl-[184px] md:mt-[120px]">
            <h4
              className="w-[107px] h-[64px] md:w-[170px] md:[86px] text-white text-center text-[20px] font-bold
          md:text-start md:text-[32px]"
            >
              Rules and <span className="text-[#D434FE]">Guidelines</span>
            </h4>
            <p
              className="w-[300px] h-[200px] text-white text-[13px] text-center
          md:text-start md:text-[14px] md:w-[535px] md:h-[165px] md:pt-10"
            >
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
            <img
              src="/assets/star transparent.png"
              alt=""
              className="absolute w-[26px] h-[32px] md:bottom-[370px] md:left-[500px]"
            />
          </div>
          <img
            src="/assets/star.png"
            alt=""
            className="absolute w-[26px] h-[32px] md:bottom-[130px] md:left-[800px]"
          />
          <div className="relative">
            <img
              src="/assets/Ellipse 1.png"
              alt=""
              className="hidden md:block absolute w-[134px] h-[134px] right-[130px] top-[80px]"
            />
            <img
              src="/assets/lady-reading.png"
              alt=""
              className="w-[294px] h-[382px] md:w-[664px] md:h-[500px] object-contain relative"
            />
            <img
              src="/assets/Purple-Lens-Flare-right.png"
              alt=""
              className="absolute md:right-[-190px] md:top-[200px] "
            />
          </div>
        </div>
        <hr className="bg-[#333131] border-none h-[1px]" />
      </div>
    </>
  );
};

export default Rules;
