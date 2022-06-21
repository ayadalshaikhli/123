import Image from "next/image";
import React from "react";

export default function Forthsection() {
  return (
    <div
      className=" overflow-hidden font-black"
      style={{
        position: "relative",
        height: "70vh",
        width: "100%",
        overflow: "hidden",
        color: "#3F3C65",
      }}
    >
   
           <Image
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/forthbg.png"
          alt="background"
        />
      <div className="grid md:flex md:flex-row absolute top-1 md:top-24 md:ml-60 items-center md:gap-48 px-10 py-2">
        <div className="work">
          <h1 className="text-3xl md:text-5xl mb-5">
            Whats the deadline for <br /> achieving your goal?
          </h1>
          <p className=" leading-7 text-xl  md:leading-10  md:text-3xl text-left font-normal w-full ">
            During the Accountability Smark Contract creation process,
            <br /> you will provide use with the email address of a trusted
            <br />
            friend or neutral third party who will receive a special pass-
            <br />
            word that can be used to release the Ethereum from the <br />
            Accountability Smart Contract.
          </p>
        </div>
        <div className="mt-10 h-32 relative md:w-96 md:h-96 ">
                <Image
                  alt="Mountains"
                  src="/forthicon.png" 
                  layout="fill"
                  objectFit="contain"
                />
              </div>
      </div>
    </div>
  );
}
