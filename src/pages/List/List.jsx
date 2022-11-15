import "./list.css";
import Header from "../../Components/Header/Header";
import SearchItem from "../../Components/Search_Item/SearchItem";

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
    </div>
  );
};

export default List;
