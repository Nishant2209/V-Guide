import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TOM from "../../Components/TypesOfMentor/TOM";

import "./Dashboard.css";

const Dashboard = (props) => {
  return (
    <div className="dash" data-aos="fade-in">
      <Header showAlert={props.showAlert}/>
      <Featured />
      <TOM />
      <Footer />
    </div>
  );
};

export default Dashboard;
