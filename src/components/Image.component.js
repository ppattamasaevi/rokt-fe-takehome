import "./Image.style.css";
import { useState } from "react";

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
        <img src={src.medium} alt={alt} onLoad={showImage} />
      </a>
    </>
  );
};

export default Image;
