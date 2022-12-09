import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header";
import Footer_Dash from "../../Components/Footer_Dash/Footer_Dash";
import TOM from "../../Components/TypesOfMentor/TOM";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash" data-aos="fade-in">
      <Header />
      <Featured />
      <TOM />
      <Footer_Dash />
    </div>
  );
};

export default Dashboard;
