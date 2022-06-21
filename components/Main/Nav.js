import React from "react";

export default function Nav() {
  return (
    <header className="absolute w-full  p-5 text-center  items-center text-lg font-arial font-medium">
      <div className="flex flex-col md:flex md:flex-row justify-around align-middle  items-center">
        <div className="logo uppercase z-10">CryptoGoal.io</div>
        <div className="flex justify-between z-10 mt-5 items-center text-black md:text-white gap-3  first-letter:md:gap-10  ">
          <div className="">Home</div>
          <div className="us">About Us</div>
          <div className="us">Contact</div>
          <div className="login bg-blue-200 px-5 py-1 md:px-10 md:py-2 rounded-md text-blue-900 ">
            LOGIN
          </div>
        </div>
      </div>
    </header>
  );
}
