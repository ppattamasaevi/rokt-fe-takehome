const Image = ({ photo }) => {
  const { alt, src } = photo;

  return (
    <>
      <img src={src.tiny} alt={alt} />
    </>
  );
};

export default Image;
