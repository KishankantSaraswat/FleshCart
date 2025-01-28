import React from "react"
import { Link } from "react-router-dom"
import { FaCarrot, FaAppleAlt, FaLeaf, FaTruck, FaAward } from "react-icons/fa"

const Hero = () => {
  return (
    <section id="hero" className="relative bg-emerald-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-6 md:pr-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Fresh & Organic <br />
              <span className="text-emerald-600">Groceries</span> <br />
              Delivered Daily
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              Shop fresh produce, pantry essentials, and household items with same-day delivery to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Shop Now
              </Link>
              <Link
                to="/"
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition-colors duration-300"
              >
                View Categories
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-8">
              <div className="flex items-center gap-2">
                <FaTruck size={24} color="#059669" />
                <span className="text-sm text-gray-600">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLeaf size={24} color="#059669" />
                <span className="text-sm text-gray-600">100% Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAward size={24} color="#059669" />
                <span className="text-sm text-gray-600">Best Quality</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-emerald-100 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-200 opacity-50 rounded-full transform -translate-x-1/4"></div>
              <div className="absolute inset-0 bg-emerald-300 opacity-25 rounded-full transform translate-x-1/4"></div>
            </div>
            <div className="absolute top-4 right-4 bg-white p-4 rounded-2xl shadow-lg animate-bounce">
              <FaCarrot size={30} color="#059669" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-2xl shadow-lg animate-bounce delay-150">
              <FaAppleAlt size={30} color="#059669" />
            </div>
            <div className="absolute top-1/2 right-0 bg-white p-4 rounded-2xl shadow-lg animate-bounce delay-300">
              <FaLeaf size={30} color="#059669" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="relative h-16">
          <div className="absolute bottom-0 w-full h-16 bg-white transform -skew-y-3"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

