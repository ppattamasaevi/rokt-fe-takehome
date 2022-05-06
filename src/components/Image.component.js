import { useState } from "react";
import "./Image.style.css";

const Image = ({ photo }) => {
  const [loaded, setLoaded] = useState(false);
  const { alt, src, url, photographer } = photo;

  const showImage = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && <div className="placeholder-image"></div>}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        title={`By ${photographer}`}
      >
        <img src={src.small} alt={alt} onLoad={showImage} />
      </a>
    </>
  );
};

export default Image;
