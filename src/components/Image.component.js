const Image = ({ photo }) => {
  const { alt, src, url, height, width, photographer } = photo;

  return (
    <>
      <img src={src.medium} />
    </>
  );
};

export default Image;
