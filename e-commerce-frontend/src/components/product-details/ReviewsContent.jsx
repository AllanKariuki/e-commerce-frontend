const Reviewscontent = () => {
    const reviews = [
        {
          author: 'Helen M.',
          date: 'Yesterday',
          rating: 5,
          comment: 'Excellent running shoes. It turns very sharply on the foot.',
          likes: 42,
          replies: 0
        },
        {
          author: 'Ann D.',
          date: '2 days ago',
          rating: 4,
          comment: 'Good shoes',
          likes: 16,
          replies: 2
        },
        {
          author: 'Andrew G.',
          date: '2 days ago',
          rating: 5,
          comment: 'Is it suitable for running?',
          likes: 0,
          replies: 0
        }
      ];
      
      const ratingCounts = [
        { stars: 5, count: 28 },
        { stars: 4, count: 9 },
        { stars: 3, count: 4 },
        { stars: 2, count: 1 },
        { stars: 1, count: 1 }
      ];
      
      const averageRating = 4.8;
      
      return (
        <div className="py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="font-medium mr-2">Newest</span>
              <ChevronDown size={16} />
            </div>
            
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-xl font-bold">{averageRating}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              {reviews.map((review, index) => (
                <div key={index} className="py-4 border-t border-gray-200">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src="/api/placeholder/32/32" 
                        alt={review.author} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="ml-2">
                      <div className="font-medium">{review.author}</div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex text-yellow-400 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < review.rating ? 'currentColor' : 'none'} 
                        stroke={i < review.rating ? 'none' : 'currentColor'}
                      />
                    ))}
                  </div>
                  
                  <p className="text-sm mb-2">{review.comment}</p>
                  
                  <div className="flex text-xs text-gray-500">
                    <button className="mr-4">Reply</button>
                    <div className="flex items-center mr-4">
                      <Star size={14} className="mr-1" />
                      <span>{review.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>{review.replies}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 h-fit">
              {ratingCounts.map((item) => (
                <div key={item.stars} className="flex items-center mb-2">
                  <span className="w-4 text-sm">{item.stars}</span>
                  <div className="flex-1 mx-2 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-yellow-400 h-full" 
                      style={{ width: `${(item.count / 43) * 100}%` }} 
                    />
                  </div>
                  <span className="w-6 text-right text-sm">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Reviewscontent;