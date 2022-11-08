import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/Mail_List/MailList";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <Featured />
        <MailList />
      </div>
    </div>
  );
};

export default Dashboard;
