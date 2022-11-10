import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/Mail_List/MailList";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash">
      <Header />
      <Featured />
      <MailList />
    </div>
  );
};

export default Dashboard;
