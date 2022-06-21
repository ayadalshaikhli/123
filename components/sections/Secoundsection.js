import Image from "next/image";
import React from "react";

export default function Secoundsection() {
  return (
    <div
      style={{
        position: "relative",
        height: "70vh",
        width: "100%",
        overflow: "hidden",
        color: "#3F3C65",
      }}
      className=" overflow-hidden font-black "
    >
      <div>
        <Image
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/threeicon.png"
          alt="background"
        />
        <h1 className="absolute text-3xl ml-24  top-0 md:left-1/3 md:ml-36 md:text-5xl pt-10">
          How it works
        </h1>
        <div className="">
          <div className="grid grid-cols-1 md:grid md:grid-cols-3  md:gap-56 absolute top-20 md:top-36  w-full ">
            <div className="work flex flex-col  items-center">
              <div className="w-24 h-24 relative md:w-96 md:h-56 ">
                <Image
                  alt="Mountains"
                  src="/1.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <h1 className="text-center md:pt-10 md:text-2xl ">
                Set your goal and <br /> deadline
              </h1>
            </div>
            <div className="work flex flex-col  items-center">
              <div className="w-24 h-24 relative md:w-96 md:h-56 ">
                <Image
                  alt="Mountains"
                  src="/2.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h1 className="text-center md:pt-10 md:text-2xl ">
                Deposit Ethereum <br /> into an accountability <br />
                smart contract.
              </h1>
            </div>
            <div className="work flex flex-col  items-center">
              <div className=" w-24 h-24 relative md:w-96 md:h-56 ">
                <Image
                  alt="Mountains"
                  src="/3.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h1 className="text-center md:pt-10 md:text-2xl ">
                Accomplish your goal <br /> to get your crypto <br /> back.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
