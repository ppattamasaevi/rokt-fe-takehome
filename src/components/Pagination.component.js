const Pagination = ({ galleryData, handler }) => {
  const { next_page, prev_page, page, per_page, total_results } = galleryData;

  return (
    <div>
      {page && (
        <>
          <p>{`${total_results} images found`}</p>
          <p>{`Displaying page ${page} / ${Math.ceil(
            total_results / per_page
          )}`}</p>
        </>
      )}
      {prev_page && (
        <button value={"prev"} onClick={(e) => handler(prev_page, page, e)}>
          Prev
        </button>
      )}
      {next_page && (
        <button value={"next"} onClick={(e) => handler(next_page, page, e)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
