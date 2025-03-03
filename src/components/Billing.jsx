import React from "react";

import { apple, google, bill } from "../assets/index";

const Billing = () => {
  return (
    <section className="billing px-6 sm:pl-20 mt-24 md:mt-44" id="billing">
      <div className="grid grid-cols-1 gap-[70px] md:grid-cols-2 md:gap-[150px]">
        <div className="flex flex-col justify-center space-y-8 md:order-2">
          <h3 className="text-4xl md:text-5xl font-semibold leading-[60px] md:leading-[70px]">
            Easily control your billing & invoicing.
          </h3>
          <p className="font-normal text-lg text-dim-white md:max-w-[450px]">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex gap-6 md:gap-12 md:mt-[24px]">
            <button className="cursor-pointer">
              <img src={apple} width={128} height={42} alt="" className="" />
            </button>
            <button className="cursor-pointer">
              <img src={google} width={128} height={42} alt="" className="" />
            </button>
          </div>
        </div>
        <img src={bill} alt="" className="md:order-1" />
      </div>
    </section>
  );
};

export default Billing;
