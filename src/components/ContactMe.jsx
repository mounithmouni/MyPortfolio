import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import arrow from "../assets/arrow.png";
export default function ContactMe() {
  useGSAP(() => {
    gsap.fromTo(
      ["#p1", "#p2", "#p3", "#btn1"],
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#headers-Cme",
          start: "100px 80%",
          end: "350px 500px",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ["#d1", "#d2", "#d3"],
      {
        opacity: 0,
        x: 300,
        duration: 1,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#quickLink",
          start: "-140px 80%",
          end: "6px 500px",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <>
      <section
        id="Contact"
        className="h-[130vh] mt-20 sm:mt-12 flex flex-col items-start pt-26 ml-10 sm:ml-36 sm:h-screen"
      >
        <div id="headers-Cme" className="text-center w-[90%]">
          <p
            id="p1"
            className="sm:mt-10 -mt-20 text-4xl text-orange-400 font-extrabold"
          >
            Contact Me.
          </p>
          <p id="p2" className="text-5xl sm:text-6xl font-extrabold pt-10">
            Let's Connect
          </p>
          <p
            id="p3"
            className="mt-5  sm:text-lg sm:w-[50%] text-center mx-auto "
          >
            Feel free to contact me if having any questions. I’m available for
            new projects or just for chatting.
          </p>
          <button
            id="btn1"
            className="btn-primary flex items-center mx-auto mt-5 px-5 py-2"
          >
            <a href="mailto:murthi.mouni@gmail.com" target="_blank">
              Connect with me.
            </a>
            <img src={arrow} className="w-5" />
          </button>
        </div>
        <div
          id="quickLink"
          className="flex flex-col sm:flex-row justify-center mt-20 sm:mt-20 gap-5 sm:gap-86 ml-5 sm:ml-10  "
        >
          <div id="d1" className="flex flex-col gap-3">
            <h2 className="text-orange-400 text-xl">Contact Me.</h2>
            <p className="hover:border-b-2 w-auto hover:w-full duration-100 border-orange-500 transition-all ease-in-out">
              <a href="mailto:murthi.mouni@gmail.com" target="_blank">
                murthi.mouni@gmail.com
              </a>
            </p>
          </div>
          <div id="d2" className="flex flex-col gap-3">
            <h2 className="text-orange-400 text-xl">Quick Links</h2>
            <p className="hover:border-b-2 w-0 hover:w-[50px] duration-300 border-orange-500 transition-border-b  ease-in-out">
              <a href="#Home">Home</a>
            </p>
            <p className="hover:border-b-2 w-0 hover:w-[85px] duration-300 border-orange-500 transition-border-b  ease-in-out">
              <a href="#Education">Education</a>
            </p>
            <p className="hover:border-b-2 w-0 hover:w-[65px] duration-300 border-orange-500 transition-border-b  ease-in-out">
              <a href="#Projects">Projects</a>
            </p>
          </div>
          <div id="d3" className="flex flex-col mb-20 sm:mb-0 gap-3">
            <h2 className="text-orange-400 text-xl">Social</h2>
            <p className="hover:border-b-2 w-0 hover:w-[65px] sm:hover:w-full duration-300 border-orange-500 transition-border-b  ease-in-out">
              <a href="https://github.com/mounithmouni" target="blank">
                GitHub
              </a>
            </p>
            <p className="hover:border-b-2 w-0 hover:w-[70px] sm:hover:w-full duration-300 border-orange-500 transition-border-b  ease-in-out">
              <a href="https://www.linkedin.com/in/mmounith/" target="blank">
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <div className="flex justify-end items-end w-[90%] mt-8">
          <p className="font-light my-auto mr-10">Check Out</p>
          <div className="w-12 h-11 border-3 border-box mr-2.5 flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/mmounith/"
              target="blank"
              className="text-2xl text-center"
            >
              Li
            </a>
          </div>
          <div className="w-12 h-11 border-3 border-box mr-2.5 flex items-center justify-center">
            <a
              href="https://github.com/mounithmouni"
              target="blank"
              className="text-2xl text-center"
            >
              Gh
            </a>
          </div>
          <div className="w-12 h-11 border-3 border-box mr-2.5 flex items-center justify-center">
            <a href={resume} target="blank" className="text-2xl text-center">
              Cv
            </a>
          </div>
        </div> */
}
