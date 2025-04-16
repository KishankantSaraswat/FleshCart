import React from "react"
import { Link } from "react-router-dom"
import { FaCarrot, FaAppleAlt, FaLeaf, FaTruck, FaAward, FaShoppingBasket } from "react-icons/fa"

const features = [
  { icon: <FaTruck />, text: "Free Delivery" },
  { icon: <FaLeaf />, text: "100% Organic" },
  { icon: <FaAward />, text: "Best Quality" },
];

const floatingIcons = [
  { icon: <FaCarrot />, position: "top-4 right-4", delay: "delay-0" },
  { icon: <FaAppleAlt />, position: "bottom-4 left-4", delay: "delay-150" },
  { icon: <FaShoppingBasket />, position: "top-1/2 right-0", delay: "delay-300" },
];

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
            <p className="text-gray-600 text-lg md:text-xl max-w-lg">
              Shop fresh produce, pantry essentials, and household items with same-day delivery to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Shop Now
              </Link>
              <Link
                to="/categories"
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Categories
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-emerald-600">{feature.icon}</span>
                  <span className="text-sm text-gray-600">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-square bg-emerald-100 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-200 opacity-50 rounded-full transform -translate-x-1/4 animate-pulse"></div>
              <div className="absolute inset-0 bg-emerald-300 opacity-25 rounded-full transform translate-x-1/4 animate-pulse delay-150"></div>
              <img 
                src="/images/hero-groceries.png" 
                alt="Fresh groceries"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            {floatingIcons.map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.position} bg-white p-4 rounded-2xl shadow-lg animate-bounce ${item.delay}`}
              >
                <span className="text-emerald-600 text-3xl">{item.icon}</span>
              </div>
            ))}
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

