import React from "react"
import { Link } from "react-router-dom"
import { FaPepperHot, FaAppleAlt, FaShoppingBasket, FaClock, FaArrowRight } from "react-icons/fa"
import { useCart } from "../context/CartContext"

const deals = [
  {
    id: 1,
    name: "Summer Vegetables",
    price: 299,
    oldPrice: 429,
    icon: <FaPepperHot className="text-6xl text-emerald-600" />,
    discount: "30%",
    description: "Fresh seasonal vegetables from local farms",
    endsIn: "2 days",
  },
  {
    id: 2,
    name: "Fresh Fruits Bundle",
    price: 1599,
    oldPrice: 2199,
    icon: <FaAppleAlt className="text-6xl text-emerald-600" />,
    discount: "25%",
    description: "Seasonal fruit selection at special price",
    endsIn: "3 days",
  },
  {
    id: 3,
    name: "Weekly Essentials",
    price: 4999,
    oldPrice: 6299,
    icon: <FaShoppingBasket className="text-6xl text-emerald-600" />,
    discount: "20%",
    description: "Complete household essentials package",
    endsIn: "5 days",
  },
]

const SeasonalDeals = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (deal) => {
    addToCart({
      id: deal.id,
      name: deal.name,
      price: deal.price,
      image: "/placeholder.svg?height=200&width=200",
    });
  };

  return (
    <section id="seasonal-deals" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Festival Deals</h2>
          <p className="text-gray-600">Limited time offers on fresh seasonal products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <div className="bg-emerald-100 h-48 flex items-center justify-center">
                  {deal.icon}
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Save {deal.discount}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{deal.name}</h3>
                  <div className="text-right">
                    <span className="text-emerald-600 font-bold text-xl">₹{(deal.price/100).toFixed(2)}</span>
                    <span className="block text-gray-400 line-through text-sm">₹{(deal.oldPrice/100).toFixed(2)}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <FaClock className="text-emerald-600" />
                    <span className="text-sm text-gray-600">Ends in {deal.endsIn}</span>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(deal)}
                    className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-300"
                  >
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
            className="bg-white text-emerald-600 px-8 py-3 rounded-full font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition-colors duration-300 inline-flex items-center"
          >
            View All Deals
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SeasonalDeals

