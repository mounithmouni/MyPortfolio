import { useState } from "react";
import Card from "./Card";
import { cardData } from "../utils/cardData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Education() {
  const [selectedYear, setSelectedYear] = useState(2024);
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  mm.add("(min-width:736px)", () => {
    useGSAP(() => {
      gsap.fromTo(
        "#education_para",
        {
          opacity: 0,
          y: 50,
          duration: 0.4,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: "#education_para",
            start: "-50px 80%",
            end: "center top",
            scrub: true,
            // markers: true,
          },
        }
      );

      gsap.fromTo(
        "#doy",
        {
          opacity: 0,
          x: -800,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: "#doy",
            start: "-200px 80%",
            end: "cemter center",
            scrub: true,
            // markers: true,
          },
        }
      );

      gsap.fromTo(
        "#vline",
        {
          opacity: 0,
          y: 150,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: "#vline",
            start: "center bottom",
            end: "50px center",
            scrub: true,
            // markers: true,
          },
        }
      );
    }, []);
  });
  function handleCard(year) {
    setSelectedYear(year);
  }

  const filteredData = selectedYear
    ? cardData.filter((data) => data.yop === selectedYear)
    : cardData;

  return (
    <>
      <section
        id="Education"
        className="h-screen flex flex-col -mt-[200px] sm:mt-0 items-start pt-26  sm:ml-36 sm:h-screen"
      >
        <div className="text-center w-[90%] flex justify-center items-center">
          <p
            id="education_para"
            className="text-4xl text-orange-400 ml-10 sm:ml-0 font-extrabold"
          >
            Education
          </p>
        </div>

        {/* Cards & Years */}
        <div className="sm:flex mt-12 sm:gap-10">
          <div className="flex flex-row sm:flex-col gap-10 ml-20 sm:justify-items-start sm:my-auto sm:ml-34">
            {cardData.map((data, i) => (
              <button
                className={`cursor-pointer transition-all duration-500 ${
                  selectedYear === data.yop
                    ? "transform text-orange-400 scale-130"
                    : "opacity-40 scale-80"
                }`}
                key={i}
                onClick={() => handleCard(data.yop)}
              >
                <p id="doy" className="text-2xl sm:text-6xl font-bold">
                  {data.yop}
                </p>
              </button>
            ))}
          </div>

          <div id="vline" className="vl hidden sm:block"></div>

          <div>
            {filteredData.map((data, i) => (
              <Card cardList={data} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
