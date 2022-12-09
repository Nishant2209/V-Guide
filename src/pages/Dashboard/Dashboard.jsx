import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header";
import FooterDash from "../../Components/Footer_Dash/Footer_Dash";
import TOM from "../../Components/TypesOfMentor/TOM";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash" data-aos="fade-in">
      <Header />
      <Featured />
      <TOM />
      <FooterDash />
    </div>
  );
};

export default Dashboard;
