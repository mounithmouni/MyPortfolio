import React from "react";
import arrow from "./../assets/down-arrow.png";
import { useState } from "react";
import Dropdown from "./DropDown";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <section
        id="Home"
        className="h-[70vh] flex flex-col items-start pt-56 ml-36 sm:h-screen"
      >
        <div className="hiThere">
          <p className="font-extrabold text-2xl">HI, THERE</p>
        </div>
        <div>
          <p className="text-6xl font-extrabold">MOUNITH MURTHI IS</p>
          <p className="text-6xl font-extrabold">RIGHT HERE!</p>
        </div>
        <div className="flex flex-row justify-between gap-60">
          <p className="text-base font-mono w-lg mt-1.5">
            Crafting pixel-perfect, user-friendly web experiences with modern
            technologies.
          </p>
          <div>
            <p className="w-lg text-justify">
              From wireframes to responsive layouts, I specialize in building
              dynamic interfaces that deliver seamless experiences. My journey
              revolves around translating ideas into visually stunning,
              functional digital solutions.
            </p>
            <div className="flex flex-row justify-between gap-60 mt-10">
              <div className={isVisible ? "hiTheres" : ""}>
                <p className="font-extrabold text-xl">Technology & Skills</p>
              </div>
              <button onClick={toggleVisibility}>
                <img src={arrow} alt="arrow Png" className="arrow" />
              </button>
            </div>
            <Dropdown isVisible={isVisible} />
            <hr className="new1" />
            <div
              className={`flex gap-2 justify-end ${
                !isVisible ? "mt-18" : "hidden"
              }`}
            >
              <p className="text-base font-mono mt-1">EXPLORE MY WORK BELOW</p>
              <button className="mt-1">
                <img src={arrow} alt="arrow Png" className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
