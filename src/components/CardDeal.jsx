import React from "react";
import Button from "./Button";
import { card } from "../assets/index";

const CardDeal = () => {
  return (
    <section className="card-deal px-6 sm:px-20 mt-24 md:mt-44">
      <div className="grid grid-cols-1 gap-[70px] md:grid-cols-2 md:gap-[150px]">
        <div className="flex items-start flex-col justify-center space-y-[24px]">
          <h3 className="text-4xl md:text-5xl font-semibold leading-[60px] md:leading-[70px]">
            Find a better card deal in few easy steps.
          </h3>
          <p className="font-normal text-lg text-dim-white md:max-w-[500px]">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button label="Get Started" />
        </div>
        <img src={card} alt="" className="" />
      </div>
    </section>
  );
};

export default CardDeal;
