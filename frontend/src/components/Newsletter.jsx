import React from "react"

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-emerald-600 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Get Fresh Updates & Exclusive Offers
              </h2>
              <p className="text-emerald-100">Subscribe to our newsletter and receive:</p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-white">
                  <i className="fas fa-check-circle"></i>
                  <span>Weekly meal planning ideas</span>
                </li>
                <li className="flex items-center space-x-3 text-white">
                  <i className="fas fa-check-circle"></i>
                  <span>Seasonal product updates</span>
                </li>
                <li className="flex items-center space-x-3 text-white">
                  <i className="fas fa-check-circle"></i>
                  <span>Exclusive subscriber discounts</span>
                </li>
                <li className="flex items-center space-x-3 text-white">
                  <i className="fas fa-check-circle"></i>
                  <span>Early access to special deals</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="terms" className="mt-1 rounded text-emerald-600 focus:ring-emerald-500" />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to receive marketing communications from FreshMart. You can unsubscribe at any time.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Subscribe Now
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </form>
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-4 text-emerald-600">
                  <i className="fas fa-lock"></i>
                  <span className="text-sm">Your information is secure and encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Join over 25,000 happy subscribers</p>
          <div className="flex justify-center items-center space-x-6">
            <i className="fab fa-facebook-f text-2xl text-gray-400 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"></i>
            <i className="fab fa-twitter text-2xl text-gray-400 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"></i>
            <i className="fab fa-instagram text-2xl text-gray-400 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"></i>
            <i className="fab fa-pinterest-p text-2xl text-gray-400 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

