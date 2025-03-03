import React from "react";
import { clients } from "../constants/index";

const Clients = () => {
  return (
    <section className="clients px-6 sm:px-20 mt-24 md:mt-32">
      <div className="grid grid-cols-2 gap-[40px] sm:grid-cols-3 md:grid-cols-4 md:gap-[100px]">
        {clients.map((client) => {
          const { id, logo } = client;
          return (
            <a key={id} href="" className="flex items-center justify-center">
              <img src={logo} width={190} height={60} alt="" className="" />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
