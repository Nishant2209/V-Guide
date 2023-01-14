import "./searchItem.css";

const SearchItem = () => {
  const mentors = [
    {
      img: {
        source:
          "https://cdn.fansshare.com/image/chrisevans/chris-evans-sharpened-square-wx-mxaneg-chris-evans-1926005607.jpg",
        alt: "Chris",
      },
      name: "Chris",
      branch: "BTech IT",
      domain: "Web Development",
      email: "thomas2905@gmail.com",
      type: "./images/alpha-icon.png",
    },
    {
      img: {
        source:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80",
        alt: "Lewis",
      },
      name: "Lewis",
      branch: "BTech IT",
      domain: "App Development",
      email: "lewis2209@gmail.com",
      type: "./images/gamma-icon.png",
    },
    {
      img: {
        source:
          "https://launchpad.syr.edu/wp-content/uploads/2021/11/Natasha-Brao-cropped-square.jpg",
        alt: "Natasha",
      },
      name: "Natasha",
      branch: "BTech IT",
      domain: "Web Development",
      email: "king123@rediffmail.com",
      type: "./images/beta-icon.png",
    },
    {
      img: {
        source:
          "https://www.byrdie.com/thmb/kCqE3NHA0vO2CnD4hCF7traxQX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-8878126241-81ea4aa0cb934fcb95c0fe220633a2e0.jpg",
        alt: "Ruth",
      },
      name: "Ruth J. Dyer",
      branch: "BTech CSE",
      domain: "App Development",
      email: "ruth6969@gmail.com",
      type: "./images/alpha-icon.png",
    },
    {
      img: {
        source:
          "https://stylesatlife.com/wp-content/uploads/2019/09/Edgy-Side-Look-for-Men.jpg.webp",
        alt: "Davis",
      },
      name: "Davis",
      branch: "BTech IT",
      domain: "Blockchain",
      email: "davisscott23@gmail.com",
      type: "./images/alpha-icon.png",
    },
    {
      img: {
        source:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2020/11/haircuts-for-square-faces-natalie-portman.jpg?fit=728%2C921",
        alt: "Helen",
      },
      name: "Helen",
      branch: "BTech IT",
      domain: "Web Development",
      email: "helen001@gmail.com",
      type: "./images/gamma-icon.png",
    },
    {
      img: {
        source:
          "http://cdn.shopify.com/s/files/1/0271/3101/9402/products/0_BEYONDSTAR-2019-Iron-Man-Tony-Stark-Square-Sunglasses-For-Men-Style-Leopard-Transparent-Lens-Sunglass-Women.jpg?v=1583504897",
        alt: "Tony",
      },
      name: "Tony Stark",
      branch: "BTech IT",
      domain: "IOS Development",
      email: "tony@gmail.com",
      type: "./images/beta-icon.png",
    },
  ];
  return mentors.map((element) => {
    return (
      <div className="searchItem p-5 rounded-md flex flex-col m-10 md:mb-5 md:mx-0 md:my-0 md:flex-row items-center justify-between border-2 border-veryDarkBlue gap-5 bg-gradient-to-r from-[#b4b7cd] via-white to-[#f0d0cb]" data-aos="fade-in">
        <img
          src={`${element.img.source}`}
          alt={`${element.img.alt}`}
          className="siImg w-36 md:w-48 object-cover rounded-lg"
        />
        <div className="siDesc flex flex-col gap-3 self-start">
          <h1 className="siTitle text-3xl font-extrabold text-orange">
            {element.name}
          </h1>
          <span className="siBranch text-md text-veryDarkBlue">
            {element.branch}
          </span>
          <span className="siDomain text-lg text-veryDarkBlue font-extrabold">
            {element.domain}
          </span>
          <span className="siEmail text-sm text-veryDarkBlue font-bold">
            {element.email}
          </span>
          <span className="siType text-veryDarkBlue">
            Type:{" "}
            <img src={`${element.type}`} alt="" className="w-6 inline-block" />
          </span>
        </div>
        <div className="siDetails flex flex-col justify-between md:self-start">
          <div className="siDetailTexts text-right flex flex-col gap-1">
            <button className="siCheckButton border-2 py-1 px-4 ml-3 border-veryDarkBlue rounded-lg font-bold backdrop-blur-xl bg-transparent shadow text-veryDarkBlue hover:scale-110 transition-all ease-in-out">
              See availability
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default SearchItem;
