import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/Dashboard");
  };

  return (
    <section className="About-Us" id="About_Us">
      <div className="bg-skin mx-auto md:p-20 md:px-8 md:pt-28 md:pb-52">
        <h2 className="text-center text-5xl md:text-6xl font-bold m-6 pb-10 font-primary">
          About Us
          <hr className="h-1 w-7/12 lg:w-1/4 mx-auto bg-black" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 p-4 mx-10 md:mx-5">
          <div className="md:container m-auto md:col-span-2 flex justify-center">
            <img
              src="images/img1.png"
              alt=""
              className="object-cover container lg:w-10/12"
            />
          </div>
          <div className="md:col-start-3 md:col-span-3 px-2 py-6 md:pl-10 text-lg lg:text-xl font-secondary leading-8 lg:leading-10 align-middle">
            <h2 className="text-4xl my-3 font-bold">Who we are ?</h2>
            <p>
              V-Guide is a student-mentor matching platform. We are changing how
              students find and connect with their most relevant mentors, to
              help them achieve their goals and dreams. Our refined mentors data
              connects students with the best mentors for them, based on their
              skills, interests and preferences. With V-Guide, students can get
              expert advice for anything from choosing a course, college major
              to landing their dream job. Mentors joining our platform benefit
              from a simple way to give back to the community and share their
              knowledge and experience with the next generation of students.
            </p>
            <div className="my-6 md:text-left">
              <button
                onClick={routeChange}
                className="md:text-lg self-start transition ease delay-150 bg-darkblue text-white rounded-full px-9 py-3 border-2 hover:bg-white hover:text-darkblue hover:border-darkblue"
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
