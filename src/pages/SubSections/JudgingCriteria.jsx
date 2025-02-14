import React from "react";

const JudgingCriteria = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative
      md:flex-row md:items-center md:justify-evenly">
        <div className="relative mt-0 ">
          <img src="/assets/star pu.png" alt="" className="absolute w-[13px] h-[17px] top-5 left-[50%] 
          md:w-[30px] md:h-[36px] md:left-[-50%]"/>
          <img src="/assets/Ellipse 1.png" alt="" className="hidden md:block absolute w-[134px] h-[134px] 
          left-[100px] top-[50px]"/>
          <img src="/assets/woman-with-chart.png" alt="" className="mt-[74px] w-[332px] h-auto md:w-[710px] lg:w-auto object-fill 
          lg:object-cover relative"/>
          <img src="/assets/star transparent.png" alt="" className="absolute w-[12px] h-[14px] top-[60%] left-[55%] "/>
        </div>
        <div className="flex flex-col items-center justify-center relative
        md:items-start md:py-[78px]">
          <h4 className="text-[20px] text-white font-bold w-[180px] h-[54px] text-center mb-[16px]
          md:w-[200px] md:h-[86px] md:text-left md:text-[32px] md:mb-[21px] lg:w-[287px]">
            Judging Criteria <span className="text-[#D434FE]">Key attributes</span>
          </h4>
          <p className="w-[299px] h-[150px] text-white text-center
          md:text-start md:w-[533px] md:h-[75px] md:mb-[22px] mb-3">
            <span className="text-[#FF26B9]">Innovation and Creativity: {" "}</span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="w-[299px] h-[170px] text-white text-center
          md:text-start md:w-[533px] md:h-[75px] md:mb-[22px]">
            <span className="text-[#FF26B9]">Functionality: {" "}</span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p className="w-[303px] h-[195px] text-white text-center
          md:text-start md:w-[533px] md:h-[75px] md:mb-[22px]">
            <span className="text-[#FF26B9]">Impact and Relevance: {" "}</span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="w-[313px] h-[150px] text-white text-center
          md:text-start md:w-[533px] md:h-[75px] md:mt-[22px] mb-3 md:mb-[22px]">
            <span className="text-[#FF26B9]">Technical Complexity: {" "}</span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="w-[316px] h-[170px] text-white text-center
          md:text-start md:w-[533px] md:h-[75px] mb-6 md:mb-[55px]">
            <span className="text-[#FF26B9]">Adherence to Hackathon Rules: {" "}</span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
          <img src="/assets/star.png" alt="" className="absolute w-[10px] h-[12px] right-[15%] mt-[282%] md:mt-0"/>
        <button className="mt-3 w-[120px] h-[40px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] rounded-[4px] 
        text-white mb-[70px] md:w-[172px] md:h-[53px]">
          Read More
        </button>
        </div>
        
      </div>
      <hr className=" bg-[#333131] border-none h-[1px]" />
    </>
  );
};

export default JudgingCriteria;
