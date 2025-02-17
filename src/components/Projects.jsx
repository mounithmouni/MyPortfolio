import Card2 from "./Card2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PROJECTSDATA } from "../utils/cardData";

export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      "#blackBack",
      {
        opacity: 0,
        x: -1300, // Keeps the black box sliding in from the left
        duration: 0.4,
        delay: 1,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#blackBack",
          start: "150px 80%",
          end: "200px center",
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".card",
      {
        opacity: 0,
        x: 1300,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#cards",
          start: "150px 80%",
          end: "160px center",
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      "#proj-Title",
      {
        opacity: 0,
        y: 50,
        duration: 1.6,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#proj-Title",
          start: "150px 60%",
          end: "150px center",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <>
      <section
        id="Projects"
        className="h-[100%] mt-20 flex flex-col items-start pt-26 ml-10 sm:ml-36 sm:h-screen"
      >
        <div
          id="blackBack"
          className="bg-zinc-950  w-[90%] sm:h-[10000px] h-[1200px] drop-shadow-2xl text-center rounded-4xl"
        >
          <p
            id="proj-Title"
            className="mt-10 text-4xl text-orange-400 font-extrabold"
          >
            Projects
          </p>
          <div
            id="cards"
            className="card grid sm:grid-cols-3 -gap-2 pb-25 sm:pb-40 pt-5 sm:w-full  sm:h-full"
          >
            {/* <Card2 id="card1" />
            <Card2 id="card2" />
            <Card2 id="card3" /> */}
            {PROJECTSDATA.map((data) => (
              <Card2
                className="card"
                projInformation={data}
                key={data.projName}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
