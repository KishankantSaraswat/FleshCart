import React from "react"
import { Link } from "react-router-dom"

const deals = [
  {
    name: "Summer Vegetables",
    price: 2.99,
    oldPrice: 4.29,
    icon: "fa-pepper-hot",
    discount: "30%",
    description: "Fresh seasonal vegetables from local farms",
    endsIn: "2 days",
  },
  {
    name: "Fresh Fruits Bundle",
    price: 15.99,
    oldPrice: 21.99,
    icon: "fa-apple-alt",
    discount: "25%",
    description: "Seasonal fruit selection at special price",
    endsIn: "3 days",
  },
  {
    name: "Weekly Essentials",
    price: 49.99,
    oldPrice: 62.99,
    icon: "fa-shopping-basket",
    discount: "20%",
    description: "Complete household essentials package",
    endsIn: "5 days",
  },
]

const SeasonalDeals = () => {
  return (
    <section id="seasonal-deals" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Seasonal Deals</h2>
          <p className="text-gray-600">Limited time offers on fresh seasonal products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <div className="bg-emerald-100 h-48 flex items-center justify-center">
                  <i className={`fas ${deal.icon} text-6xl text-emerald-600`}></i>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Save {deal.discount}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{deal.name}</h3>
                  <div className="text-right">
                    <span className="text-emerald-600 font-bold text-xl">₹{deal.price.toFixed(2)}</span>
                    <span className="block text-gray-400 line-through text-sm">₹{deal.oldPrice.toFixed(2)}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-clock text-emerald-600"></i>
                    <span className="text-sm text-gray-600">Ends in {deal.endsIn}</span>
                  </div>
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="bg-white text-emerald-600 px-8 py-3 rounded-full font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition-colors duration-300"
          >
            View All Deals
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SeasonalDeals

