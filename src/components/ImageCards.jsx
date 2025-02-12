import { useState } from 'react'
import ImageCard from './ImageCard'
import ImageOverlay from './ImageOverlay'

const ImageCards = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = (image) => {
    setSelectedImage(image)
  };

  const handleCloseOverlay = () => {
    setSelectedImage(null)
  };

  return (
    <div className="m-6 flex justify-center">
      {images.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6 md:gap-6">
          {images.map((image) => (
            <ImageCard imageData={image} key={image.id} onClick={handleImageClick} />
          ))}
        </div>
      ) : (
        <div className="text-center text-4xl text-white font-mono font-extrabold mt-48">No images found... <br></br>
        Try another search!</div>
      )}
      <ImageOverlay image={selectedImage} onClose={handleCloseOverlay} />
    </div>
  )
}

export default ImageCards
