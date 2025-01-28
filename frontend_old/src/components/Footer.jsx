import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold text-emerald-600">FreshMart</span>
            </div>
            <p className="text-gray-600 mb-6">
              Your trusted source for fresh, organic produce and household essentials. Committed to sustainability and
              community wellness.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  Shop Now
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/account" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-emerald-600 mt-1"></i>
                <span className="text-gray-600">123 Green Street, Eco City, 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-emerald-600"></i>
                <span className="text-gray-600">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-emerald-600"></i>
                <span className="text-gray-600">info@freshmart.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 pb-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-4">
              <i className="fab fa-cc-visa text-gray-400 text-2xl"></i>
              <i className="fab fa-cc-mastercard text-gray-400 text-2xl"></i>
              <i className="fab fa-cc-amex text-gray-400 text-2xl"></i>
              <i className="fab fa-cc-paypal text-gray-400 text-2xl"></i>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/privacy" className="text-gray-600 hover:text-emerald-600 text-sm">
                Privacy Policy
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/terms" className="text-gray-600 hover:text-emerald-600 text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} FreshMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

