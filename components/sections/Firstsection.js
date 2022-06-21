import Image from "next/image";
import React from "react";

export default function Firstsection() {
  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="text-white grid grid-rows-1 md:flex md:flex-row overflow-hidden relative align-middle items-center "
    >
      <div className="z-10 top-0 flex flex-col text-left  md:pl-20 mt-60 md:ml-48 p-10">
        <h1 className="text-3xl md:text-6xl font-black text-blue-900 pb-10">
          TALK IS CHEAP. <br />
          CRYPTOS NOT.
        </h1>
        <p className="a text-gray-400 text-xl md:text-2xl pb-10">
          CryptoGoal is a goal keeping tool that assists <br />
          user with creating accountability <br />
          smark contacts
        </p>
        <button className=" bg-pink-500 w-44 text-white text-md font-black px-5 rounded-md py-3">
          START NOW
        </button>
      </div>
      <div style={{
        position: "absolute",
        top: "0",
        right: "0",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        zIndex: "-1",
      }}>
      <Image  
         layout="responsive"
         width={1250}
         height={535}  src="/cover.jpg" className=" md:w-full md:h-full overflow-hidden" 
      />
      </div>
    </div>
  );
}
