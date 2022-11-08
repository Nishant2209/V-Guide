import "./list.css";
import Navbar from "../../Components/Navbar_Dash/Navbar";
import Header from "../../Components/Header/Header";
import SearchItem from "../../Components/Search_Item/SearchItem";
import MailList from "../../Components/Mail_List/MailList";

const List = () => {
  return (
    <div>
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <MailList />
    </div>
  );
};

export default List;
