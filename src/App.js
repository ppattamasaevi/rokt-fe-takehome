import Gallery from "./components/Gallery.component";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const initialFetch = async () => {
      const res = await axios.get("/curated");
      setGalleryData(res.data);
    };
    initialFetch();
  }, []);

  return (
    <div>
      Gallery
      <Gallery galleryData={galleryData} />
    </div>
  );
};

export default App;
