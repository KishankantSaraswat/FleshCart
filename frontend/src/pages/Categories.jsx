import React from "react"
import { Link } from "react-router-dom"

const categories = [
  { id: 1, name: "Fruits", icon: "🍎", description: "Fresh and juicy fruits" },
  { id: 2, name: "Vegetables", icon: "🥕", description: "Crisp and nutritious vegetables" },
  { id: 3, name: "Dairy", icon: "🥛", description: "Fresh milk, cheese, and more" },
  { id: 4, name: "Bakery", icon: "🍞", description: "Freshly baked bread and pastries" },
  { id: 5, name: "Seafood", icon: "🐟", description: "Fresh catch from the sea" },
  { id: 6, name: "Pantry", icon: "🥫", description: "Essential grocery items" },
  { id: 7, name: "Beverages", icon: "🍹", description: "Refreshing drinks and juices" },
]

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Product Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/shop?category=${encodeURIComponent(category.name.toLowerCase())}`}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories

