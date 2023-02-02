import React from "react";

function Testimonials() {
  return (
    <>
      <section className="Testimonials" id="Testimonials">
        <div className="bg-gradient-to-t from-[#b4b7cd] via-white to-[#f0d0cb] text-veryDarkBlue mx-auto p-4 md:px-8 pb-20 py-20 md:py-32">
          <div className="text-center text-5xl md:text-6xl font-bold m-6 font-primary">
            <h2>
              Testi<span className="text-orange">monials</span>
            </h2>
            <hr className="h-1 w-9/12 lg:w-1/3 mx-auto bg-veryDarkBlue" />
          </div>
          <div className="flex flex-col space-y-10 lg:space-y-0 lg:space-x-14 xl:space-x-32 lg:flex-row items-center justify-evenly md:mt-20 mx-10 md:mx-20 lg:mx-5 xl:mx-20">
            <div
              className="bg-transparent shadow-class transition ease-in-out w-auto text-center m-0 p-3 text-white rounded-2xl text-xl mt-5 lg:mt-0 hover:scale-110"
              data-aos="zoom-in"
              data-aos-duration="1100"
            >
              <div className="flex flex-col md:flex-row lg:flex-col">
                <div className="self-center container">
                  <img
                    className="h-20 w-20 object-cover bg-opacity-10 m-auto"
                    src="images/arab.png"
                    alt="arab"
                  />
                </div>
                <div className="p-3 font-secondary">
                  <div className="text-veryDarkBlue rounded-2xl">
                    <div className="flex justify-start">
                      <img
                        src="https://img.icons8.com/doodle/48/000000/quote-left.png"
                        className="w-7"
                        alt="quote-left"
                      />
                    </div>
                    <p className="text-center text-base md:text-sm px-7">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut illum libero cupiditate modi vero, est ea facere
                      aliquam ab rem.
                    </p>
                    <div className="flex justify-end">
                      <img
                        src="https://img.icons8.com/doodle/48/000000/quote-right.png"
                        className="w-7"
                        alt="quote-right"
                      />
                    </div>
                  </div>
                  <div className="text-veryDarkBlue">
                    <h2 className="font-medium text-base md:text-xl tracking-wider">
                      Jass
                    </h2>
                    <h2 className="font-medium text-base">Student</h2>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-transparent shadow-class transition ease-in-out w-auto text-center m-0 p-3 text-white rounded-2xl text-xl mt-5 lg:mt-0 hover:scale-110"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <div className="flex flex-col md:flex-row lg:flex-col">
                <div className="self-center container">
                  <img
                    className="h-20 w-20 object-cover rounded-full bg-opacity-10 m-auto"
                    src="images/girl.png"
                    alt="girl"
                  />
                </div>
                <div className="p-3 font-secondary">
                  <div className="text-veryDarkBlue rounded-2xl">
                    <div className="flex justify-start">
                      <img
                        src="https://img.icons8.com/doodle/48/000000/quote-left.png"
                        className="w-7"
                        alt="quote-left"
                      />
                    </div>
                    <p className="text-center text-base md:text-sm px-7">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut illum libero cupiditate modi vero, est ea facere
                      aliquam ab rem.
                    </p>
                    <div className="flex justify-end">
                      <img
                        src="https://img.icons8.com/doodle/48/000000/quote-right.png"
                        className="w-7"
                        alt="quote-right"
                      />
                    </div>
                  </div>
                  <div className="text-veryDarkBlue">
                    <h2 className="font-medium text-base md:text-xl tracking-wider">
                      Mia
                    </h2>
                    <h2 className="font-medium text-base">Student</h2>
                    <p>⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-transparent shadow-class transition ease-in-out w-auto text-center m-0 p-3 text-white rounded-2xl text-xl mt-5 lg:mt-0 hover:scale-110"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <div className="flex flex-col md:flex-row lg:flex-col">
                <div className="self-center container">
                  <img
                    className="h-20 w-20 object-cover rounded-full bg-opacity-10 m-auto"
                    src="images/young-man.png"
                    alt="young-man"
                  />
                </div>
                <div className="p-3 font-secondary">
                  <div className="text-veryDarkBlue rounded-2xl">
                    <div className="flex justify-start">
                      <img
                        src="https://img.icons8.com/doodle/48/000000/quote-left.png"
                        className="w-7"
                        alt="quote-left"
                      />
                    </div>
                    <p className="text-center text-base md:text-sm px-7">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut illum libero cupiditate modi vero, est ea facere
                      aliquam ab rem.
                    </p>
                    <div className="flex justify-end">
                      <img
                        src="https://img.icons8.com/doodle/48/000000/quote-right.png"
                        className="w-7"
                        alt="quote-right"
                      />
                    </div>
                  </div>
                  <div className="text-veryDarkBlue">
                    <h2 className="font-medium text-base md:text-xl tracking-wider">
                      Brian
                    </h2>
                    <h2 className="font-medium text-base">Mentor</h2>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
