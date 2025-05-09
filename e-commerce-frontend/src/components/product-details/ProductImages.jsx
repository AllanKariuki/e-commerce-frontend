import { useState } from 'react';

const ProductImages = () =>{
    const allThumbnails = [
        "https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"

    ]

    const [visibleThumbnails, setVisibleThumbnails] = useState(allThumbnails.slice(0, 4));
    const [remainingThumbnails, setRemainingThumbnails] = useState(allThumbnails.slice(4));

    const handleMoreClick = () => {
        setVisibleThumbnails(remainingThumbnails.slice(0, 4));
        setRemainingThumbnails(remainingThumbnails.slice(4).concat(visibleThumbnails));
    };

    return (
        <div>
            <div className="bg-gray-100 w-full h-5/6 aspect-square mb-2 rounded-lg">
                <img 
                    src="https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                    alt="Product" 
                    className="w-full h-full object-contain" 
                />
            </div>

            <div className="grid grid-cols-5 space-x-1 mt-2">
                {visibleThumbnails.map((thumb, index) => (
                    <div
                        key={index}
                        className={`w-34 h-24 border-2 ${index === 0 ? 'border-gray-400' : 'border-gray-200'} rounded-lg cursor-pointer`}
                        >
                        <img
                            src={thumb}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover" 
                        />
                    </div>
                ))}
                {remainingThumbnails.length > 0 && (
                    <div
                        className="flex items-center justify-center w-34 h-24 border-1 rounded border-gray-200 text-center text-gray-500 cursor-pointer"
                        onClick={handleMoreClick}
                    >
                        <span className="text-sm">+{remainingThumbnails.length} More</span>
                    </div>
                )}
            </div>

        </div>
    )
}

export default ProductImages;