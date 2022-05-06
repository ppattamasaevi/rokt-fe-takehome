import axios from "axios";
import { useState, useEffect } from "react";
import Gallery from "./components/Gallery.component";
import Pagination from "./components/Pagination.component";

const App = () => {
  // const [mode, setMode] = useState("curated");
  const [galleryData, setGalleryData] = useState([]);

  const paginationHandler = async (url, page, e) => {
    const userIsSearching = url.includes("search");

    const pagingDirection = e.target.value;

    const followingPage = pagingDirection === "next" ? page + 1 : page - 1;

    if (!userIsSearching) {
      const { data } = await axios.get(`/curated/${followingPage}`);
      setGalleryData(data);
    }
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
      <Pagination galleryData={galleryData} handler={paginationHandler} />
      <Gallery galleryData={galleryData} />
    </div>
  );
};

export default App;

// initilize with curated photos
// next/prev buttons feed new curated photos data to Gallery

// if user submit search term, fetch data via /search route
// reset galleryData state with new data from search

// next/prev buttons shouldn't care whether curated or searched photos are being served...but need to know cause api routing
// next_page, prev_page String.includes('curated' / 'search')

// provide option for user to reset page with curated photos ?
