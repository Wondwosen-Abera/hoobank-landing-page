import React from "react";
import { feedback } from "../constants/index";
import { quotes } from "../assets/index";

const Testimonials = () => {
  return (
    <section className="testimonials px-6 sm:px-20 mt-24 md:mt-44" id="clients">
      <div className="flex flex-col space-y-[80px]">
        <div className="flex flex-col space-y-[24px] items-center justify-between md:flex-row">
          <h3 className="text-4xl md:text-5xl font-semibold leading-[60px] md:leading-[70px] md:max-w-[470px]">
            What people are saying about us
          </h3>
          <p className="font-normal text-lg text-dim-white md:max-w-[500px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[40px] sm:grid-cols-2 md:grid-cols-3 md:gap-[100px]">
          {feedback.map((item) => {
            const { id, content, name, title, img } = item;
            return (
              <div
                key={id}
                className="feedback-card rounded-[20px] flex flex-col items-start justify-between space-y-[24px] px-[40px] py-[60px]"
              >
                <img
                  src={quotes}
                  width={42}
                  height={27}
                  alt=""
                  className="md:mb-[16px]"
                />
                <p className="font-normal text-base md:leading-[32px] tracking-wide">
                  {content}
                </p>
                <div className="flex gap-6">
                  <img
                    src={img}
                    width={50}
                    height={50}
                    alt={name}
                    className=""
                  />
                  <div className="">
                    <h4 className="text-[17px] font-normal leading-[32px]">
                      {name}
                    </h4>
                    <p className="font-normal text-base text-dim-white">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
