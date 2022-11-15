import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header"; 
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash">
      <Header />
      <Featured />
    </div>
  );
};

export default Dashboard;
