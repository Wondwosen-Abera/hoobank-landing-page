import React from "react";
import { features } from "../constants/index";
import Button from "./Button";

const Business = () => {
  return (
    <section className="features mt-24 md:mt-44" id="features">
      <div className="px-6 sm:pl-20 grid grid-cols-1 gap-[70px] md:grid-cols-2 md:gap-[150px]">
        <div className="flex items-start flex-col justify-center space-y-[24px]">
          <h2 className="text-4xl md:text-5xl font-semibold leading-[60px] md:leading-[70px]">
            You do the business, we’ll handle the money.
          </h2>
          <p className="font-normal text-lg leading-[30px] text-dim-white">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <Button label="Get Started" />
        </div>
        <div className="flex items-start flex-col justify-center space-y-[36px]">
          {features.map((feature) => {
            const { id, icon, title, content } = feature;
            return (
              <div
                key={id}
                className="feature-card flex items-center px-[20px] py-[25px] space-x-[20px]"
              >
                <span className="flex items-center justify-center bg-dim-blue p-[12px] rounded-full w-[60px] h-[60px]">
                  <img src={icon} alt={title} className="" />
                </span>
                <span className="flex flex-col space-y-[10px]">
                  <h3 className="text-lg font-semibold leading-[23px]">
                    {title}
                  </h3>
                  <p className="text-dim-white font-normal text-base leading-[24px] md:max-w-[370px]">
                    {content}
                  </p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Business;
