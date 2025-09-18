import React from 'react'

const BrandStory = () => {
  return (
    <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                <h2 className="text-3xl md:text-4xl font-light mb-8">Our Story</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Founded in 2020, BR.F emerged from a simple belief: fashion should be both forward-thinking and responsible. We combine cutting-edge design with sustainable practices to create clothing that doesn't just look good—it does good.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Every piece is thoughtfully crafted using eco-friendly materials and ethical manufacturing processes. We're not just creating clothes; we're building a movement toward a more conscious future in fashion.
                </p>
                </div>
                <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center text-gray-500 text-lg">
                Brand Story Visual
                </div>
            </div>
        </div>
    </section>
  )
}

export default BrandStory
