import { useGSAP } from "@gsap/react";

export default function Card2(props) {
  const { projInformation } = props;

  return (
    <div className="w-[90%] h-[95%] mx-auto sm:mt-10 mt-0 sm:mx-auto mb-10 sm:mb-0 sm:w-[80%] sm:h-[75%] bg-white rounded-2xl overflow-hidden ">
      <p className="text-start ml-5 mt-5 sm:mt-10 font-extrabold">
        {projInformation.projName}
      </p>
      <div className="flex gap-2 mt-5 mb-3 sm:mb-10 sm:mt-5 pl-5">
        <button className="btn-primary">{projInformation.btn1}</button>
        <button className="btn-primary">{projInformation.btn2}</button>
      </div>
      <div className="w-[90%] sm:w-[90%] sm:h-[40%] sm:-mt-3 mx-auto sm:mx-auto sm:max bg-orange-400 rounded-xl z-10 translate-y-3 transition-all duration-300 ease-in-out shadow-4xl hover:scale-105 hover:bg-gray-900 hover:shadow-2xl hover:shadow-orange-400 ">
        <img
          src={projInformation.imgUrl}
          alt="Zomato png"
          className="h-full w-full object-cover rounded-xl border-4 border-black"
        />
      </div>
      {/* Adjust 'Live' button placement for mobile responsiveness */}
      <div className="flex flex-row justify-between mx-7 mt-8 sm:mt-13 ">
        <button className="btn-secondary transition-all duration-300 hover:rounded-2xl">
          <a href={projInformation.liveUrl} target="_blank">
            Live
          </a>
        </button>
        <button className="btn-secondary transition-all duration-300 hover:rounded-2xl">
          <a href={projInformation.demoUrl} target="_blank">
            Demo
          </a>
        </button>
      </div>
    </div>
  );
}
