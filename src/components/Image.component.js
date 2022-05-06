const Image = ({ photo }) => {
  const { alt, src, url, height, width, photographer } = photo;

  return (
    <>
      <img src={src.tiny} alt={alt} />
    </>
  );
};

export default Image;
