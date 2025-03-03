import React from "react";

const Button = ({ label }) => {
  return (
    <button className="text-lg font-medium leading-[27px] text-primary bg-blue-gradient px-[20px] py-[12px] md:px-[33px] md:py-[19px] rounded-[10px] mt-[24px] cursor-pointer">
      {label}
    </button>
  );
};

export default Button;
