import Image from "./Image.component";

const Gallery = ({ galleryData }) => {
  const { photos } = galleryData;
  return (
    <div>
      {photos ? (
        photos.map((photo) => <Image key={photo.id} photo={photo} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Gallery;
