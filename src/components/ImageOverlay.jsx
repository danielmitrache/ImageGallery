const ImageOverlay = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed w-96 h-96 mb-auto flex justify-center items-center z-50" onClick={onClose}>
      <img src={image} alt="Selected" className="rounded-lg border-8 border-white shadow-2xl shadow-amber-50" />
    </div>
  );
};

export default ImageOverlay;
