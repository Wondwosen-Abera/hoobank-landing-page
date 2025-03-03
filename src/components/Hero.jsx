import React from "react";
import { discount, robot, GetStarted } from "../assets/index";

const Hero = () => {
  return (
    <section className="">
      <div className="flex flex-col space-y-10 items-center sm:relative md:mt-8">
        <div className="w-full text-white grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 pl-6 sm:pl-20 sm:mx-[50px] mt-[30px] sm:mt-[50px]">
          <div className="flex flex-col justify-center gap-y-4 sm:gap-y-6">
            <div className="bg-discount-gradient box-shadow py-2 px-2 sm:p-1 flex items-center max-sm:w-full gap-x-2 rounded-lg max-w-[300px] md:max-w-[400px]">
              <img src={discount} alt="" />
              <p className="font-normal text-[14px] sm:text-[18px] sm:leading-[27px]">
                20% <span className="text-dim-white">DISCOUNT FOR</span> 1 MONTH{" "}
                <br className="sm:hidden" />
                <span className="text-dim-white">ACCOUNT</span>
              </p>
            </div>
            <h1 className="text-[60px] font-semibold leading-[80px] sm:text-[72px] sm:leading-[100px] sm:max-w-lg">
              The Next <span className="text-gradient">Generation</span> Payment
              Method.
            </h1>

            <p className="text-dim-white font-normal text-lg sm:leading-[36px] sm:mt-7">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <img
            src={robot}
            width={670}
            height={444}
            alt="robot-icon"
            className=""
          />
        </div>
        <button className="cursor-pointer mx-auto md:absolute md:top-[253px]">
          <img src={GetStarted} alt="" width={140} height={140} className="" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
