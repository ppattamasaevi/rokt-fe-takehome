import axios from "axios";
import { useState, useEffect } from "react";
import Gallery from "./components/Gallery.component";
import Pagination from "./components/Pagination.component";
import Search from "./components/Search.component";

const App = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [searchField, setSearchField] = useState("");

  const paginationHandler = async (url, page, e) => {
    const userIsSearching = url.includes("search");
    const pagingDirection = e.target.value;
    const followingPage = pagingDirection === "next" ? page + 1 : page - 1;

    if (!userIsSearching) {
      const { data } = await axios.get(`/curated/${followingPage}`);
      setGalleryData(data);
    } else {
      const { data } = await axios.get(
        `/search?query=${searchField}&page=${followingPage}`
      );
      setGalleryData(data);
    }
  };

  const searchFieldHandler = (e) => {
    const userSearch = e.target.value;
    setSearchField(userSearch);
  };

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`/search?query=${searchField}`);
    setGalleryData(data);
  };

  useEffect(() => {
    const initialFetch = async () => {
      const res = await axios.get("/curated");
      setGalleryData(res.data);
    };
    initialFetch();
  }, []);

  return (
    <div>
      <h3>Gallery</h3>
      <Search
        fieldHandler={searchFieldHandler}
        submitHandler={searchSubmitHandler}
      />
      <Pagination galleryData={galleryData} handler={paginationHandler} />
      <Gallery galleryData={galleryData} />
    </div>
  );
};

export default App;
