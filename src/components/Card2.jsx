import zomato from "../assets/zomato.png";
export default function Card2() {
  return (
    <>
      <div className="w-[20%] h-[90%] bg-white  rounded-2xl overflow-hidden">
        <div className="flex gap-2 mt-10 pl-5">
          <button className="btn-primary">ReactJs</button>
          <button className="btn-primary">Tailwind CSS</button>
        </div>
        <p className="text-start ml-5 mt-10 font-extrabold">Zomato Clone</p>
        <div className="w-[70%] h-[70%] bg-orange-400 rounded-xl z-10 translate-y-10 translate-x-25 transition-all duration-300 ease-in-out shadow-4xl  hover:-rotate-12 hover:scale-110">
          <img
            src={zomato}
            alt=""
            className="w-full h-full object-cover rounded-xl border-4 border-orange-400"
          />
        </div>
      </div>
    </>
  );
}
