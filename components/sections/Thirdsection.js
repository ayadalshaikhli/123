import Image from "next/image";
import React from "react";

export default function Thirdsection() {
  return (
    <div
      className=" overflow-hidden font-black p-10  flex flex-col md:flex md:flex-row items-center "
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        color: "#3F3C65",
      }}
    >
      <div>
      <Image 
                layout="intrinsic"
                width={700}
                height={475}
            className="" 
            src="/4.jpg" 
            alt="" 
          />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-2xl md:text-6xl mb-5">What is CryptoGoal?</h1>
        <p className=" text-gray-400 leading-8 md:leading-10 text-xl md:text-3xl text-left font-normal ">
          CryptoGoal is a goal keeping tool that assists users with creating
          <br />
          accountability smart contracts. Users set goals, deposit Ethereum
          <br /> in Accountability Smart Contracts, and define what what will
          happen to <br /> the funds if they missing their goal. Users must then
          accomplish <br /> their goals to get their Ethereum returned
        </p>
      </div>
    </div>
  );
}
