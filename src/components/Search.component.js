import "./Search.style.css";

const Search = ({ searchField, fieldHandler, submitHandler }) => {
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Keyword Search"
          onChange={fieldHandler}
          value={searchField}
        />
        <button className="search-button" type="submit">
          Find
        </button>
      </form>
    </div>
  );
};

export default Search;
