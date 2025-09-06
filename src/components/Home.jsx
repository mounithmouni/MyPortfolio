import React, { useRef } from "react";
import arrow from "./../assets/down-arrow.png";
import { useState } from "react";
import Dropdown from "./DropDown";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import resume from "../assets/Mounith_Res.pdf";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  let mm = gsap.matchMedia();
  mm.add("(min-width:736px)", () => {
    useGSAP(() => {
      gsap.from(["#hi-There", "#hi-Para"], {
        opacity: 0,
        x: -300,
        duration: 0.5,
        stagger: 0.5,
        delay: 0.8,
      });

      gsap.from(["#nameTitle", "#subName"], {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.5,
        delay: 1.2,
      });
      gsap.from(["#smallDes"], {
        opacity: 0,
        y: -30,
        duration: 0.5,
        delay: 1.4,
      });
      gsap.from("#largeDes", {
        x: 700,
        opacity: 0,
        duration: 0.6,
        delay: 1.4,
      });
      gsap.from(["#tech-Skills", "#tech-btn", "#line2"], {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.4,
        delay: 1.6,
      });
      gsap.from(["#explore-works", "#explore-btn"], {
        opacity: 0,
        x: -200,
        duration: 0.5,
        stagger: 0.4,
        delay: 1.8,
      });
    }, []);
  });

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <section
        id="Home"
        className="h-screen pt-10 ml-3 mr-10 flex flex-col items-start ws:pt-42 mac:pt-56 sm:ml-36 sm:h-screen"
      >
        <div id="hi-There" className="hiThere mt-5 sm:m-0">
          <p id="hi-Para" className="font-extrabold text-lg sm:text-2xl">
            HI, THERE
          </p>
        </div>
        <div>
          <p
            id="nameTitle"
            className="text-4xl w-lg sm:w-auto sm:text-6xl font-extrabold"
          >
            MOUNITH MURTHI IS
          </p>
          <p id="subName" className="text-4xl sm:text-6xl font-extrabold">
            RIGHT HERE!
          </p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row justify-between ws:gap-70 mac:gap-120">
          <div>
            <p
              id="smallDes"
              className="text-sm font-mono w-xs sm:text-base sm:w-lg mt-1.5"
            >
              Crafting pixel-perfect, user-friendly web experiences with modern
              technologies.
              <br />
              <button
                id="res-btn"
                className="w-fit mt-2 py-1 px-2 text-xs sm:text-base sm:uppercase sm:px-3 sm:py-1 border-2 transition-all duration-300 hover:border-orange-400 hover:px-3 sm:hover:px-4 hover:rounded-2xl "
              >
                <a href={resume} target="blank">
                  Resume
                </a>
              </button>
            </p>
          </div>

          <div>
            <p
              id="largeDes"
              className="mt-2 sm:m-0 text-sm w-sm sm:text-base sm:w-lg text-justify"
            >
              From wireframes to responsive layouts, I specialize in building
              dynamic interfaces that deliver seamless experiences. My journey
              revolves around translating ideas into visually stunning,
              functional digital solutions.
            </p>
            <div className="flex flex-row justify-between sm:gap-60 mt-5 sm:mt-5">
              <div className={isVisible ? "hiTheres" : ""}>
                <p
                  id="tech-Skills"
                  className="font-bold sm:font-extrabold text-lg sm:text-xl"
                >
                  Technology & Skills
                </p>
              </div>
              <button id="tech-btn" onClick={toggleVisibility}>
                <img src={arrow} alt="arrow Png" className="arrow" />
              </button>
            </div>

            <Dropdown isVisible={isVisible} />
            <hr className="new1" id="line2" />
            <div
              className={`flex gap-2 justify-end ${
                !isVisible ? "mt-44 ws:mt-32" : "hidden"
              }`}
            >
              <p id="explore-works" className="text-base font-mono mt-1">
                EXPLORE MY WORK BELOW
              </p>
              <a id="explore-btn" href="#Projects">
                <button className="mt-1">
                  <img src={arrow} alt="arrow Png" className="arrow" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
