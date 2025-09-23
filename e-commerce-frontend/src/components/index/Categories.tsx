import React from 'react'

const Categories = () => {
  const categories = [
    { name: "Outerwear", gradient: "from-indigo-500 to-purple-600" },
    { name: "Streetwear", gradient: "from-pink-400 to-red-500" },
    { name: "Footwear", gradient: "from-blue-400 to-cyan-400" },
    { name: "Accessories", gradient: "from-green-400 to-teal-400" }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className={`relative h-48 rounded-2xl bg-gradient-to-br ${category.gradient} cursor-pointer transform hover:scale-105 transition-transform duration-300 overflow-hidden`}>
              <div className="absolute bottom-6 left-6 text-white font-semibold text-xl">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories
