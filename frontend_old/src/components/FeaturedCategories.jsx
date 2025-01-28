import React from "react"
import { Link } from "react-router-dom"

const categories = [
  { name: "Vegetables", icon: "fa-carrot", description: "Fresh Picks" },
  { name: "Fruits", icon: "fa-apple-alt", description: "Seasonal Fresh" },
  { name: "Dairy", icon: "fa-cheese", description: "Fresh Daily" },
  { name: "Bakery", icon: "fa-bread-slice", description: "Fresh Baked" },
  { name: "Beverages", icon: "fa-glass-cheers", description: "Refreshing" },
  { name: "Household", icon: "fa-home", description: "Essentials" },
]

const FeaturedCategories = () => {
  return (
    <section id="featured-categories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
          <p className="text-gray-600">Explore our wide range of fresh and organic products</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-emerald-50 rounded-2xl p-6 transition-all duration-300 hover:bg-emerald-100 cursor-pointer">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                    <i className={`fas ${category.icon} text-3xl text-emerald-600`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/categories"
            className="bg-white text-emerald-600 px-8 py-3 rounded-full font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition-colors duration-300"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories

