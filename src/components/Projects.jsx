import Card2 from "./Card2";

export default function Projects() {
  return (
    <>
      <section
        id="Projects"
        className="h-[70vh] flex flex-col items-start pt-24 ml-36 mt-10 sm:h-screen"
      >
        <div className="bg-zinc-950 w-[90%] h-[600px] drop-shadow-2xl text-center rounded-4xl">
          <p className="mt-10 text-4xl text-orange-400 font-extrabold">
            Projects
          </p>
          <div className="flex items-center justify-center gap-20 pb-25 pt-5 w-full h-full relative ">
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
        </div>
      </section>
    </>
  );
}
