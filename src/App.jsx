import ImageCards from "./components/ImageCards"
import NavBar from "./layouts/NavBar"
import { useEffect, useState } from "react"
const UNSPLASH_API_KEY = 'MmnDrCXrgm1NA8nQC6mfdHkyVI3sf-oy9yDGGdz8P7w'

const App = () => {
  const [query, setQuery] = useState(localStorage.getItem("query") || "")
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
        try {
            const url = query ? `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${UNSPLASH_API_KEY}` 
            : `https://api.unsplash.com/photos/random?count=30&client_id=${UNSPLASH_API_KEY}`
            const response = await fetch(url)
            const data = await response.json()
            query ? setImages(data.results) : setImages(data)
        }
        catch (error) {
            console.error("Error fetching images: ", error)
        }
    }
    fetchImages()
}, [query])

  return (
    <>
      <NavBar onSearch={setQuery} />
      <ImageCards images={images} />
    </>
  )
}

export default App