import "./Gallery.style.css";
import Image from "./Image.component";

const Gallery = ({ galleryData }) => {
  const { photos } = galleryData;
  return (
    <div className="grid-wrapper">
      {photos ? (
        photos.map((photo) => (
          <div key={photo.id} className="image-container">
            <Image photo={photo} />
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Gallery;
