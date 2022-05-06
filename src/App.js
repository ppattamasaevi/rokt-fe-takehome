import "./App.style.css";
import axios from "axios";
import { useEffect } from "react";
import Gallery from "./components/Gallery.component";
import Pagination from "./components/Pagination.component";
import Search from "./components/Search.component";
import { useLocalStorage } from "./custom-hooks";

const App = () => {
  const [galleryData, setGalleryData] = useLocalStorage("galleryData", {});
  const [searchField, setSearchField] = useLocalStorage("searchField", "");

  const [searchHistory, setSearchHistory] = useLocalStorage(
    "searchHistory",
    []
  );
  const [dataMode, setDataMode] = useLocalStorage("dataMode", "");

  const paginationHandler = async (url, page, e) => {
    const userIsSearching = url.includes("search");
    const pagingDirection = e.target.value;
    const followingPage = pagingDirection === "next" ? page + 1 : page - 1;

    if (!userIsSearching) {
      const { data } = await axios.get(`/curated/${followingPage}`);
      setGalleryData(data);
    } else {
      const { data } = await axios.get(
        `/search?query=${searchHistory[0]}&page=${followingPage}`
      );
      setGalleryData(data);
    }
  };

  const getCuratedImages = async () => {
    console.log(galleryData);
    const { data } = await axios.get("/curated");
    setDataMode("curated");
    localStorage.setItem("galleryData", JSON.stringify(data));
    setGalleryData(data);
  };

  const searchFieldHandler = (e) => {
    const userSearch = e.target.value;
    setSearchField(userSearch);
  };

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    if (!searchField) return;

    const { data } = await axios.get(`/search?query=${searchField}`);
    setGalleryData(data);

    setDataMode("search");
    setSearchHistory([searchField, ...searchHistory]);
    setSearchField("");
  };

  useEffect(() => {
    if (!galleryData.photos) {
      getCuratedImages();
    }
  }, []);

  return (
    <div className={"App"}>
      <h1>{"The Simple Gallery"}</h1>
      <Search
        searchField={searchField}
        fieldHandler={searchFieldHandler}
        submitHandler={searchSubmitHandler}
      />
      <Pagination
        galleryData={galleryData}
        paginationHandler={paginationHandler}
        getCuratedImages={getCuratedImages}
        dataMode={dataMode}
        searchHistory={searchHistory}
      />
      <Gallery galleryData={galleryData} />
    </div>
  );
};

export default App;
