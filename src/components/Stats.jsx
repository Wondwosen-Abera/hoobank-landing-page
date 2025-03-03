import React from "react";
import { Line } from "../assets/index";
import { stats } from "../constants/index";

const Stats = () => {
  return (
    <section
      className="flex mt-15 md:mt-20 items-center justify-center"
      id="stats"
    >
      <div className="px-6 text-white flex flex-col md:flex-row md:items-center gap-y-4 md:gap-x-[50px] mt-4 md:mt-8">
        {stats.map((stat) => (
          <div className="flex gap-x-4 items-center">
            <span className="font-semibold text-[40px] leading-[53px]">
              {stat.value}
            </span>
            <span className="font-normal text-base leading-[26px] text-gradient">
              {stat.title}
            </span>
            {stat.src ? (
              <span className="hidden md:block">
                <img src={Line} alt="" className="md:ml-4" />
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
