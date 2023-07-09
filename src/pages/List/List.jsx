import "./list.css";
import Header from "../../Components/Header/Header";
import SearchItem from "../../Components/Search_Item/SearchItem";
import Footer from "../../Components/Footer/Footer";
import destinationContext from "../../Context/destinationContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const List = (props) => {
  const navigate = useNavigate();
  const context = useContext(destinationContext);
  const { user, fetchUser } = context;
  useEffect(() => {
    fetchUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            {user.type === "Mentor" ? (
              navigate("/Appointment")
            ) : (
              <SearchItem showAlert={props.showAlert} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
