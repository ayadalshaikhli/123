import Image from "next/image";
import React from "react";

export default function Footersection() {
  return (
    <div
      className=""
      style={{
        position: "relative",
        height: "50vh",
        overflow: "hidden",
        color: "#3F3C65",
      }}
    >
      <div>
        <Image
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/blue.jpg"
          alt="background"
        />
      </div>
      <div className=" flex flex-col justify-between first-letter:mt-5  md:flex md:flex-row md:justify-around absolute top-0 md:w-full text-white   md:mt-24 font-black p-10">
        <div>
          <h1 className="text-2xl md:text-4xl">CryptoGoal.io</h1>
        </div>
        <div className="flex flex-row md:flex md:flex-row mt-2">
          <div>
            <ul className="gap-y-2 md:gap-y-6 text-xl flex flex-col border-r-2 pr-12 md:pr-44">
              <li>Our Site</li>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul className="gap-y-2 md:gap-y-6 text-xl flex flex-col border-r-2 pr-12 md:pr-44 ml-5">
              <li>For you</li>
              <li>Register</li>
              <li>Login</li>
              <li>Terms&conditions</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 mt-10">
          <h1>Social Media</h1>
          <ul className="flex space-x-3">
            <li>facebook</li>
            <li>Twitter</li>
            <li>Instgram</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 text-left left-2/4">
        @2022. All rights reserved/ Privacy Policy & Legal
      </div>
    </div>
  );
}
