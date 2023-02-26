import "./list.css";
import Header from "../../Components/Header/Header";
import SearchItem from "../../Components/Search_Item/SearchItem";
import Footer from "../../Components/Footer/Footer";

const List = () => {
  return (
    <div>
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            <SearchItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
