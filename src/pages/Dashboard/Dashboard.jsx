import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/Mail_List/MailList";
import Navbar from "../../Components/Navbar_Dash/Navbar";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <MailList />
      </div>
    </div>
  );
};

export default Dashboard;
