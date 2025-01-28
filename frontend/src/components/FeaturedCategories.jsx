import React from "react"
import { Link } from "react-router-dom"
import { MdFastfood, MdLocalGroceryStore, MdRestaurant, MdBakeryDining, MdEmojiFoodBeverage, MdLocalDrink } from 'react-icons/md';

const categories = [
  { name: "Spices", icon: "fa-mortar-pestle", description: "Fresh Masalas" },
  { name: "Dals", icon: "fa-bowl", description: "Premium Lentils" },
  { name: "Atta", icon: "fa-wheat", description: "Fresh Flour" },
  { name: "Snacks", icon: "fa-cookie", description: "Namkeen & More" },
  { name: "Sweets", icon: "fa-candy", description: "Mithai Corner" },
  { name: "Beverages", icon: "fa-glass", description: "Chai & More" },
]

const iconMap = {
  'spices': MdRestaurant,
  'dals': MdFastfood,
  'atta': MdBakeryDining,
  'snacks': MdLocalGroceryStore,
  'sweets': MdEmojiFoodBeverage,
  'beverages': MdLocalDrink,
};

const FeaturedCategories = () => {
  return (
    <section id="featured-categories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"> Grocery Categories</h2>
          <p className="text-gray-600">Explore our authentic grocery collection</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={`/category/${category.name.toLowerCase()}`} 
              className="group"
              aria-label={`Browse ${category.name} category`}
            >
              <div className="bg-emerald-50 rounded-2xl p-6 transition-all duration-300 hover:bg-emerald-100">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                    {React.createElement(iconMap[category.name.toLowerCase()], {
                      className: "text-3xl text-emerald-600",
                      'aria-hidden': "true"
                    })}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
            </Link>
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

