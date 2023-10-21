const Banner = () => {
    return (
        <div>
      <section className=" mx-5 lg:-mx-1 rounded relative bg-gray-500  bg-blend bg-[url('../public/bg.jpg')]" >
          <div className="  max-w-screen-xl px-4 py-32 lg:flex lg:h-fit lg:items-center" data-aos="zoom-in">
            <div className="mx-auto max-w-xl text-center">

              <h1 className="text-3xl font-extrabold text-green-500 sm:text-5xl">
              Techno<span className="text-red-500">logy</span> <span className="font-extrabold text-green-500 ">Future</span>
              </h1>

              <p className="mt-4 text-blue-400   font-extrabold sm:text-xl/relaxed">
              Technology refers to the application of scientific knowledge, tools, and techniques to solve practical problems or to achieve specific goals.
              </p>

            </div>
          </div>
      </section>
    </div>
    );
};

export default Banner;