import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
export default function Card(props) {
  const { cardList } = props;

  let mm = gsap.matchMedia();

  mm.add("(min-width:736px)", () => {
    useGSAP(() => {
      gsap.fromTo(
        "#card",
        {
          opacity: 0,
          x: 4500,
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
  });

  return (
    <>
      <div id="card" className="my-auto mx-10 mt-10 sm:mt-20 p-10">
        <div class="-ml-10 h-[500px] w-83 md:h-max rounded-xl bg-white shadow-md md:w-full">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-48 mx-auto object-cover md:my-auto md:h-48 md:w-48 md:mt-10"
                src={cardList.imgUrl}
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <h5 className="mb-4 text-center md:text-left text-3xl font-bold tracking-tight text-orange-400">
                {cardList.name}
              </h5>

              {/* <span className="font-bold mr-2 text-xl">College Name</span> */}
              <p className="mb-4 text-lg text-justify md:text-left font-normal text-gray-700 sm:text-xl">
                <p>
                  <span className="font-bold mr-2">CollegeName:</span>
                  {cardList.clgName}
                </p>
              </p>
              {/* <span className="font-bold mr-2">Year of Passed</span> */}
              <p className="mb-4 text-lg text-justify md:text-left font-normal text-gray-700 sm:text-xl">
                <span className="font-bold mr-2">Year of Passed Out:</span>
                {cardList.yop}
              </p>
              {/* <span className="font-bold mr-2">Stream</span> */}
              <p className="mb-4 text-lg text-justify md:text-left font-normal text-gray-700 sm:text-xl">
                <span className="font-bold mr-2">Stream:</span>
                {cardList.stream}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
