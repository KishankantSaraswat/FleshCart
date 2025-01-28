import React from "react"
import { Link } from "react-router-dom"

const products = [
  {
    name: "Basmati Rice",
    description: "Premium Long Grain",
    price: 199,
    oldPrice: 249,
    icon: "fa-seedling",
    badge: "Best Seller",
  },
  {
    name: "Organic Turmeric",
    description: "Pure & Natural",
    price: 89,
    oldPrice: 129,
    icon: "fa-mortar-pestle",
    badge: "Organic",
  },
  {
    name: "Paneer Fresh",
    description: "Farm Fresh Daily",
    price: 149,
    oldPrice: 199,
    icon: "fa-cheese",
    badge: "Fresh",
  },
  {
    name: "Atta",
    description: "Chakki Fresh",
    price: 249,
    oldPrice: 299,
    icon: "fa-wheat",
    badge: "Premium",
  },
]

const Bestsellers = () => {
  return (
    <section id="bestsellers" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Bestsellers</h2>
          <p className="text-gray-600">Most loved products by our customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative">
                <div className="bg-emerald-100 rounded-xl p-6 mb-4 aspect-square flex items-center justify-center">
                  <i className={`fas ${product.icon} text-6xl text-emerald-600`}></i>
                </div>
                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-sm px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-emerald-600 font-bold text-xl">₹{product.price.toFixed(2)}</span>
                  <span className="text-gray-400 line-through text-sm">₹{product.oldPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-emerald-600 text-white py-2 rounded-full hover:bg-emerald-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="bg-white text-emerald-600 px-8 py-3 rounded-full font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers

