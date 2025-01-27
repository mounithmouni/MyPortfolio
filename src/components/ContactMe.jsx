export default function ContactMe() {
  return (
    <>
      <section
        id="Projects"
        className="h-[70vh] flex flex-col items-start pt-24 ml-36 mt-10 sm:h-screen"
      >
        <div className="text-center w-[90%]">
          <p className="text-4xl text-orange-400 font-extrabold">Contact Me.</p>
          <p className="text-9xl font-extrabold pt-20">Lets Talk...</p>
        </div>
        <form action="submit">
          <div className="mt-10 flex flex-col justify-center">
            <div className="mb-5">
              <label htmlFor="fullname" className="text-4xl font-extrabold">
                Fullname:
              </label>
              <input
                type="email"
                name=""
                id="fullname"
                className="border-b-2 w-[1100px] focus:outline-0 pl-5 text-3xl"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="fullname" className="text-4xl font-extrabold">
                Email:
              </label>
              <input
                type="text"
                name=""
                id="fullname"
                className="border-b-2 w-[1175px] focus:outline-0 pl-5 text-3xl"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="fullname" className="text-4xl font-extrabold">
                Message:
              </label>
              <input
                type="text"
                name=""
                id="fullname"
                className="border-b-2 w-[1115px] focus:outline-0 pl-5 text-3xl"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-orange-200 px-6 py-3 text-xl rounded-2xl transition-all duration-300 ease-in-out hover:bg-orange-400 hover:text-white">
              Submit
            </button>
          </div>
        </form>
        <div className="flex  justify-end items-end">
          <p>Check Out</p>
          <p>Hello</p>
        </div>
      </section>
    </>
  );
}
