import "./Pagination.style.css";

const Pagination = ({
  galleryData,
  paginationHandler,
  getCuratedImages,
  dataMode,
  searchHistory,
}) => {
  const { next_page, prev_page, page, per_page, total_results } = galleryData;
  const prevSearch = searchHistory[0];
  const totalPages = Math.ceil(total_results / per_page);

  let displayDescription;
  if (dataMode === "curated") {
    displayDescription = "the curated collection";
  } else {
    displayDescription = `your search for "${prevSearch}"`;
  }

  const prevButtonEnabled = !!prev_page;
  const nextButtonEnabled = !!next_page;

  return (
    <div>
      {total_results < 1 ? (
        <>
          <p>Your search returned 0 results</p>
          <p>
            Please try again or{" "}
            <span className={"view-curated-link"} onClick={getCuratedImages}>
              view our curated images
            </span>
          </p>
        </>
      ) : (
        page && (
          <>
            <p>{`Images from ${displayDescription}`}</p>
            <p>{`Page ${page} / ${totalPages}`}</p>
          </>
        )
      )}

      <button
        className={`prev-button ${prevButtonEnabled ? "" : "disabled"}`}
        disabled={!prevButtonEnabled}
        value={"prev"}
        onClick={(e) => paginationHandler(prev_page, page, e)}
      >
        Prev
      </button>
      <span>/</span>
      <button
        className={`prev-button ${nextButtonEnabled ? "" : "disabled"}`}
        disabled={!nextButtonEnabled}
        value={"next"}
        onClick={(e) => paginationHandler(next_page, page, e)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
