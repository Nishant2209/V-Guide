import "./list.css";
import Header from "../../Components/Header/Header";
import SearchItem from "../../Components/Search_Item/SearchItem";
import Footer_Dash from "../../Components/Footer_Dash/Footer_Dash";

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
      <Footer_Dash />
    </div>
  );
};

export default List;
