const ProductImages = () =>{
    const thumbnails = [
        "https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    ]

    return (
        <div>
            <div className="bg-gray-100 w-full h-5/6 aspect-square mb-2 rounded-lg">
                <img 
                    src="https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                    alt="Product" 
                    className="w-full h-full object-contain" 
                />
            </div>

            <div className="flex space-x-2 mt-2">
                {thumbnails.map((thumb, index) => (
                    <div
                        key={index}
                        className={`w-20 h-20 border-2 ${index === 0 ? 'border-gray-400' : 'border-gray-200'} rounded-lg cursor-pointer`}
                        >
                        <img
                            src={thumb}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover" 
                        />
                    </div>
                ))}
                <div className="flex items-center justify-center w-20 h-20 border-1 rounded border-gray-200 text-center text-gray-500">
                    <span className="text-sm">+{thumbnails.length - 4} More</span>
                </div>
            </div>

        </div>
    )
}

export default ProductImages;