const Search = ({ fieldHandler, submitHandler }) => {
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Search Images"
          onChange={fieldHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Search;
