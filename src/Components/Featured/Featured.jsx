import { FaReact, FaLaptopCode } from "react-icons/fa";
import { SiAndroidstudio, SiHiveBlockchain, SiIos } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import destinationContext from "../../Context/destinationContext";
import "./featured.css";
import { useContext, useEffect } from "react";

const Featured = () => {
  const context = useContext(destinationContext);
  const { allUsers, fetchAllUsers } = context;

  useEffect(() => {
    fetchAllUsers();
    // eslint-disable-next-line
  }, []);

  //Counting the number of mentors
  const webCount = allUsers.filter((element) => {
    return element.domain === "Web Development";
  }).length;
  const iosCount = allUsers.filter((element) => {
    return element.domain === "iOS Development";
  }).length;
  const blockCount = allUsers.filter((element) => {
    return element.domain === "Blockchain";
  }).length;
  const dsaCount = allUsers.filter((element) => {
    return element.domain === "DSA";
  }).length;
  const androidCount = allUsers.filter((element) => {
    return element.domain === "Android Development";
  }).length;
  const aimlCount = allUsers.filter((element) => {
    return element.domain === "AI/ML";
  }).length;

  return (
    <div className="flex flex-col justify-center items-center my-20 text-veryDarkBlue t-shadow">
      <hr className="bg-veryDarkBlue h-[2px] w-[90%]" />
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold my-5">
        Available Mentors
      </div>
      <p className="headerDesc font-bold text-md lg:text-xl px-4 md:w-2/3 lg:w-1/3 text-center my-5 leading-9">
        Get the guidance from the mentors around you who are accessible and
        friendly .
      </p>
      <div className="featured grid space-y-5 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 md:gap-y-5 container max-w-5xl my-5 z-0">
        <div
          className="featuredItem flex flex-col justify-center items-center shadow1 w-3/4 rounded-3xl p-8 mx-auto"
          data-aos="zoom-in"
        >
          <FaReact className="text-8xl font-extrabold mb-3 text-[#61dafb] bg-[#282c34]" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-6xl font-extrabold text-orange">
              {webCount}
            </div>
            <div className="text-center text-lg font-semibold">
              Web Development Mentors
            </div>
          </div>
          <div className="featuredBg"></div>
        </div>
        <div
          className="featuredItem flex flex-col justify-center items-center shadow2 w-3/4 rounded-3xl p-8 mx-auto"
          data-aos="zoom-in"
        >
          <SiIos className="text-8xl mb-3 text-[#305428]" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-6xl font-extrabold text-orange">
              {iosCount}
            </div>
            <div className="text-center text-lg font-semibold">
              iOS Development Mentors
            </div>
          </div>
          <div className="featuredBg"></div>
        </div>
        <div
          className="featuredItem flex flex-col justify-center items-center shadow3 w-3/4 rounded-3xl p-8 mx-auto"
          data-aos="zoom-in"
        >
          <SiHiveBlockchain className="text-8xl mb-3 text-[#220969]" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-6xl font-extrabold text-orange">
              {blockCount}
            </div>
            <div className="text-center text-lg font-semibold">
              Blockchain Mentors
            </div>
          </div>
          <div className="featuredBg"></div>
        </div>
        <div
          className="featuredItem flex flex-col justify-center items-center shadow1 w-3/4 rounded-3xl p-8 mx-auto"
          data-aos="zoom-in"
        >
          <SiAndroidstudio className="text-8xl text-[#3ad17d] mb-3" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-6xl font-extrabold text-orange">
              {androidCount}
            </div>
            <div className="text-center text-md font-bold">
              Android Development Mentors
            </div>
          </div>
          <div className="featuredBg"></div>
        </div>
        <div
          className="featuredItem flex flex-col justify-center items-center shadow2 w-3/4 rounded-3xl p-8 mx-auto"
          data-aos="zoom-in"
        >
          <FaLaptopCode className="text-8xl mb-3 text-black" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-6xl font-extrabold text-orange">
              {dsaCount}
            </div>
            <div className="text-center text-lg font-semibold">DSA Mentors</div>
          </div>
          <div className="featuredBg"></div>
        </div>
        <div
          className="featuredItem flex flex-col justify-center items-center shadow3 w-3/4 rounded-3xl p-8 mx-auto"
          data-aos="zoom-in"
        >
          <GiArtificialIntelligence className="text-8xl mb-3 text-yellow-500" />
          <div className="featuredTitles space-y-2">
            <div className="text-center text-6xl font-extrabold text-orange">
              {aimlCount}
            </div>
            <div className="text-center text-lg font-semibold">
              AI/ML Mentors
            </div>
          </div>
          <div className="featuredBg"></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
