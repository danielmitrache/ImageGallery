import { useState } from 'react'

const NavBar = ({ onSearch }) => {
  const [query, setQuery] = useState(localStorage.getItem("query") || "")
  const handleSearch = () => {
    onSearch(query)
    localStorage.setItem("query", query)
  }

  return (
    <div className="bg-gray-800 text-white h-36 p-4 sticky top-0 flex flex-col justify-center items-center z-20">
        <h1 className="text-3xl font-bold text-center font-mono">Image Gallery</h1>
        <div className="flex justify-center items-center w-full mt-4">
            <input 
                type="text" 
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-10 p-2 rounded bg-white text-black" 
                placeholder="Search for images..."
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value) 
                }}
            />
            <button 
                className="mx-4 font-mono font-extrabold text-2xl cursor-pointer px-2 py-1 border-white border-1 rounded-lg hover:bg-white hover:text-black transition-all duration-500"    
                onClick={() => handleSearch()}
            >Search</button>
        </div>
    </div>
  )
}

export default NavBar