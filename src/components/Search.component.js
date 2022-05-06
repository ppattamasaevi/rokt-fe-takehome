const Search = ({ searchField, fieldHandler, submitHandler }) => {
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Search Images"
          onChange={fieldHandler}
          value={searchField}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Search;
