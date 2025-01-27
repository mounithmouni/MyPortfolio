import { useState } from "react";
import Card from "./Card";
import { cardData } from "../utils/cardData";

export default function Education() {
  const [selectedYear, setSelectedYear] = useState(2024);

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
        className="h-[70vh] flex flex-col items-start pt-26 ml-36 sm:h-screen"
      >
        <div className="text-center w-[90%]">
          <p className="text-4xl text-orange-400 font-extrabold">Education</p>
        </div>
        <div className="flex mt-12 gap-10">
          <div className="flex flex-col gap-10 justify-items-start my-auto ml-34">
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
                <p className="text-6xl font-bold">{data.yop}</p>
              </button>
            ))}
          </div>
          <div className="vl"></div>
          {filteredData.map((data, i) => (
            <Card cardList={data} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
