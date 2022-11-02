import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Web Development</h1>
          <h2>12 Mentors</h2>
        </div>
        <div className="featuredBg"></div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.w2ssolutions.com/blog/wp-content/uploads/2019/07/ios-app-development-india.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>IOS Development</h1>
          <h2>5 Mentors</h2>
        </div>
        <div className="featuredBg"></div>
      </div>
      <div className="featuredItem">
        <img
          src="https://reliasoftware.com/static/9ce8aa204a21e69716018fee472b042c/the-complete-guide-to-mobile-app-development-2021.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>App Development</h1>
          <h2>10 Mentors</h2>
        </div>
        <div className="featuredBg"></div>
      </div>
      <div className="featuredItem">
        <img
          src="https://repository-images.githubusercontent.com/403817624/3d10f761-1027-4d0a-9906-48361e466d87"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>DSA</h1>
          <h2>20 Mentors</h2>
        </div>
        <div className="featuredBg"></div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.perfecto.io/sites/default/files/image/2020-09/social-blog-classifying-ai-ml-tools-2.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>AI/ML</h1>
          <h2>5 Mentors</h2>
        </div>
        <div className="featuredBg"></div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.patriotsoftware.com/wp-content/uploads/2022/01/what-is-blockchain-1.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Blockchain</h1>
          <h2>3 Mentors</h2>
        </div>
        <div className="featuredBg"></div>
      </div>
    </div>
  );
};

export default Featured;
