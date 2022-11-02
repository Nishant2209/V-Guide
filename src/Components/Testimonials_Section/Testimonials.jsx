import React from "react";

function Testimonials() {
    return (
      <>
        <section className="Testimonials" id="Testimonials">
          <div className="bg-white rounded-md mx-auto p-4 md:px-8 pb-20 py-20 md:py-32">
            <div className="text-center text-5xl md:text-6xl font-bold m-6 font-primary">
              <h2>Testimonials</h2>
              <hr className="h-1 w-9/12 lg:w-1/3 mx-auto bg-black" />
            </div>
            <div className="flex flex-col space-y-10 lg:space-y-0 lg:space-x-14 xl:space-x-32 lg:flex-row items-center justify-evenly md:mt-20 mx-10 md:mx-20 lg:mx-5 xl:mx-20">
              <div className="bg-lightgreen transition ease-in-out w-auto text-center m-0 p-3 text-white rounded-2xl text-xl hover:shadow-lg hover:shadow-gray-500 mt-5 lg:mt-0 hover:scale-110">
                <div className="flex flex-col md:flex-row lg:flex-col">
                  <div className="self-center container">
                    <img
                      className="h-20 w-20 object-cover bg-opacity-10 m-auto"
                      src="images/arab.png"
                      alt=""
                    />
                  </div>
                  <div className="p-3 font-secondary">
                    <div className="text-darkblue rounded-2xl">
                      <div className="flex justify-start">
                        <img
                          src="https://img.icons8.com/doodle/48/000000/quote-left.png"
                          className="w-7"
                        />
                      </div>
                      <p className="text-center text-xs md:text-sm font-bold px-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ut illum libero cupiditate modi vero, est ea
                        facere aliquam ab rem.
                      </p>
                      <div className="flex justify-end">
                        <img
                          src="https://img.icons8.com/doodle/48/000000/quote-right.png"
                          className="w-7"
                        />
                      </div>
                    </div>
                    <div className="text-darkblue">
                      <h2 className="font-medium text-base md:text-xl tracking-wider">
                        Jass
                      </h2>
                      <h2 className="font-medium text-base">Student</h2>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-lightgreen transition ease-in-out w-auto text-center m-0 p-3 text-white rounded-2xl text-xl hover:shadow-lg hover:shadow-gray-500 mt-5 hover:scale-110">
                <div className="flex flex-col md:flex-row lg:flex-col">
                  <div className="self-center container">
                    <img
                      className="h-20 w-20 object-cover rounded-full bg-opacity-10 m-auto"
                      src="images/girl.png"
                      alt=""
                    />
                  </div>
                  <div className="p-3 font-secondary">
                    <div className="text-darkblue rounded-2xl">
                      <div className="flex justify-start">
                        <img
                          src="https://img.icons8.com/doodle/48/000000/quote-left.png"
                          className="w-7"
                        />
                      </div>
                      <p className="text-center text-xs md:text-sm font-bold px-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ut illum libero cupiditate modi vero, est ea
                        facere aliquam ab rem.
                      </p>
                      <div className="flex justify-end">
                        <img
                          src="https://img.icons8.com/doodle/48/000000/quote-right.png"
                          className="w-7"
                        />
                      </div>
                    </div>
                    <div className="text-darkblue">
                      <h2 className="font-medium text-base md:text-xl tracking-wider">
                        Mia
                      </h2>
                      <h2 className="font-medium text-base">Student</h2>
                      <p>⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-lightgreen transition ease-in-out w-auto text-center m-0 p-3 text-white rounded-2xl text-xl hover:shadow-lg hover:shadow-gray-500 mt-5 hover:scale-110">
                <div className="flex flex-col md:flex-row lg:flex-col">
                  <div className="self-center container">
                    <img
                      className="h-20 w-20 object-cover rounded-full bg-opacity-10 m-auto"
                      src="images/young-man.png"
                      alt=""
                    />
                  </div>
                  <div className="p-3 font-secondary">
                    <div className="text-darkblue rounded-2xl">
                      <div className="flex justify-start">
                        <img
                          src="https://img.icons8.com/doodle/48/000000/quote-left.png"
                          className="w-7"
                        />
                      </div>
                      <p className="text-center text-xs md:text-sm font-bold px-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ut illum libero cupiditate modi vero, est ea
                        facere aliquam ab rem.
                      </p>
                      <div className="flex justify-end">
                        <img
                          src="https://img.icons8.com/doodle/48/000000/quote-right.png"
                          className="w-7"
                        />
                      </div>
                    </div>
                    <div className="text-darkblue">
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
