import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="Nitin"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Nitin Kumar</h1>
        <span className="siBranch">Btech IT</span>
        <span className="siDomain">
          Web Development
        </span>
        <span className="siRoll">
          200010140035
        </span>
        <span className="siEmail">nimble2905@gmail.com</span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
