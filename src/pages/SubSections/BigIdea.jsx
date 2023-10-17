import React from "react";

const BigIdea = () => {
  return (
    <>
      {/* big idea section  */}

      <div className="flex items-center justify-center flex-col md:flex-row relative mt-[27.77px] md:gap-[320px]">
        <img
          src="/assets/star pu.png"
          alt=""
          className="absolute left-[71px] top-[100px] w-[11px] h-[13px] md:w-[21px] md:h-[25px] md:right-[1335px] md:top-[223px]"
        />
        <img
          src="/assets/the big idea 1.png"
          alt=""
          className="md:w-[490px] md:h-[477px]"
        />
        <img
          src="/assets/arrow.png"
          alt=""
          className="w-[19.456px] h-[22.818px] absolute top-[260.77px] md:w-[49.43px] md:h-[57.974px] md:right-[773.05px] md:top-[489.84px]"
        />
        <div className="mt-[40px] flex items-center md:items-start flex-col mb-[50px] md:mt-[193px]">
          <h4 className="w-[249px] h-[54px] text-[20px] font-bold text-white text-center md:text-start md:text-[32px] md:w-[398px] md:h-[86px] md:pb-[16px]">
            Introduction to getlinked{" "}
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
          </h4>
          <p className="w-[321px] h-[107px] text-white text-[18px] text-center md:text-start pt-[9px] md:w-[535px] md:h-[165px] md:text-[14px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img
            src="/assets/star pu.png"
            alt=""
            className="absolute w-[8px] h-[10px] top-[330px] right-[71px] md:w-[30px] md:h-[36px] md:right-[182px] md:top-[216px]"
          />
        </div>
      </div>
      <hr className="mt-[180px] md:mt-[90px] bg-[#333131] border-none h-[1px]" />
    </>
  );
};

export default BigIdea;
