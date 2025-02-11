const ImageCard = ({ imageData, onClick }) => {
    console.log(imageData)
    return (
        <div className="flex flex-col h-full justify-center items-center">
            <img 
                src={`${imageData.urls.raw}&fm=jpg&w=200&fit=max`} 
                alt={imageData.alt_description} 
                className="rounded-lg w-full h-auto shadow-2xl shadow-black hover:transform hover:scale-102 transition-all duration-300 cursor-pointer" 
                onClick={() => onClick(imageData.urls.small)}
            />	
            <a 
                href={imageData.user.links.html} 
                className="underline font-mono text-xs lg:text-sm mt-2 text-center overflow-hidden text-ellipsis whitespace-nowrap max-w-full mr-auto text-white
                hover:text-blue-500 transition-all duration-300"
            >{imageData.user.username}</a>
        </div>
    )
}

export default ImageCard