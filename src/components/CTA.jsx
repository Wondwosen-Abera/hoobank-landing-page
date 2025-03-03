import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="cta px-6 sm:px-20 mt-24 md:mt-32">
      <div className="feature-card grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[150px] px-[40px] py-[30px] md:px-[80px] md:py-[50px] rounded-[20px]">
        <div className="flex items-start flex-col justify-center space-y-[24px] md:col-span-2">
          <h3 className="text-4xl md:text-5xl font-semibold leading-[50px] md:leading-[60px] ">
            Let’s try our service now!
          </h3>
          <p className="font-normal text-lg text-dim-white md:max-w-[500px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <span className="md:m-auto">
          <Button label="Get Started" />
        </span>
      </div>
    </section>
  );
};

export default CTA;
