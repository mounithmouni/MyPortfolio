import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
export default function Card(props) {
  const { cardList } = props;

  useGSAP(() => {
    gsap.fromTo(
      "#card",
      {
        opacity: 0,
        x: 500,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#card",
          start: "-900px 70%",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <>
      <div
        id="card"
        className="sm:w-lg sm:h-lg my-auto mx-10 mt-10 sm:mt-27 sm:ml-40 p-10 text-center bg-white border border-gray-200 rounded-2xl shadow-lg"
      >
        <a href="#">
          <h5 className="mb-4 text-3xl font-bold tracking-tight text-orange-400">
            {cardList.name}
          </h5>
        </a>
        {/* <span className="font-bold mr-2 text-xl">College Name</span> */}
        <p className="mb-4 font-normal text-gray-700 text-xl">
          {cardList.clgName}
        </p>
        {/* <span className="font-bold mr-2">Year of Passed</span> */}
        <p className="mb-4 font-normal text-gray-700 text-xl">{cardList.yop}</p>
        {/* <span className="font-bold mr-2">Stream</span> */}
        <p className="mb-4 font-normal text-gray-700 text-xl">
          {cardList.stream}
        </p>
      </div>
    </>
  );
}
