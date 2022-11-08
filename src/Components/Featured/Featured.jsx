import { FaReact } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";

const Featured = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20 text-veryDarkBlue t-shadow">
      <hr className="bg-veryDarkBlue h-[2px] w-[90%]" />
      <div className="text-6xl font-extrabold my-5">Available Mentors</div>
      <p className="headerDesc font-bold text-xl w-1/3 text-center my-5 leading-9">
        Get the guidance from the mentors around you. who are accessible and
        friendly .
      </p>
      <div className="featured grid grid-cols-3 gap-5 container max-w-5xl my-5">
        <div className="featuredItem flex flex-col justify-center items-center shadow-class w-3/4 rounded-3xl p-8 mx-auto">
          <FaReact className="text-8xl mb-3" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-4xl font-extrabold">12 +</div>
            <div className="text-center text-lg font-semibold">
              Web Development Mentors
            </div>
          </div>
          <div className="featuredBg"></div>
        </div>
        <div className="featuredItem flex flex-col justify-center items-center shadow-class w-3/4 rounded-3xl p-8 mx-auto">
          <FaReact className="text-8xl mb-3" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-4xl font-extrabold">12 +</div>
            <div className="text-center text-lg font-semibold">
              Web Development Mentors
            </div>
          </div>
          <div className="featuredBg"></div>
        </div>
        <div className="featuredItem flex flex-col justify-center items-center shadow-class w-3/4 rounded-3xl p-8 mx-auto">
          <FaReact className="text-8xl mb-3" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-4xl font-extrabold">12 +</div>
            <div className="text-center text-lg font-semibold">
              Web Development Mentors
            </div>
          </div>
          <div className="featuredBg"></div>
        </div>
        <div className="featuredItem flex flex-col justify-center items-center shadow-class w-3/4 rounded-3xl p-8 mx-auto">
          <SiAndroidstudio className="text-8xl mb-3" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-4xl font-extrabold">12 +</div>
            <div className="text-center text-lg font-semibold">
              Web Development Mentors
            </div>
          </div>
          <div className="featuredBg"></div>
        </div>
        <div className="featuredItem flex flex-col justify-center items-center shadow-class w-3/4 rounded-3xl p-8 mx-auto">
          <SiAndroidstudio className="text-8xl mb-3" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-4xl font-extrabold">12 +</div>
            <div className="text-center text-lg font-semibold">
              Web Development Mentors
            </div>
          </div>
          <div className="featuredBg"></div>
        </div>
        <div className="featuredItem flex flex-col justify-center items-center shadow-class w-3/4 rounded-3xl p-8 mx-auto">
          <SiAndroidstudio className="text-8xl mb-3" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-4xl font-extrabold">12 +</div>
            <div className="text-center text-lg font-semibold">
              Web Development Mentors
            </div>
          </div>
          <div className="featuredBg"></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
