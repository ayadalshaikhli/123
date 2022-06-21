import Image from "next/image";
import React from "react";

export default function Fifthsection() {
  return (
    <div
      className=" overflow-hidden font-black justify-around flex flex-col md:flex md:flex-row items-center p-10"
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        color: "#3F3C65",
      }}
    >
        <div className="w-96 h-64 relative md:w-96 md:h-96 ">
                <Image
                  alt="Mountains"
                  src="/fifthicon.jpg" 
                  layout="fill"
                  objectFit="contain"
                />
              </div>
      <div className="md:w-1/2">
        <h1 className="text-2xl md:text-6xl mb-5">
          What is happens <br />
          if miss my goal?
        </h1>
        <p className=" text-gray-400 leading-8 md:leading-10 text-xl md:text-3xl text-left font-normal">
          During the Accountability Smark Contract creation process, you
          <br /> will configure exactly what you would like done with the funds
          in
          <br />
          your accountability contract. We offer the option to send the
          <br />
          funds to an alternative Ethereum address of your choosing, as <br />
          well as several other charitable options.
        </p>
      </div>
    </div>
  );
}
