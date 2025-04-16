import React from "react"
import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { SiVisa, SiMastercard, SiAmericanexpress, SiPaypal } from 'react-icons/si'

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaPinterestP />, url: "https://pinterest.com" }
  ];

  const paymentMethods = [
    { icon: <SiVisa />, name: "Visa" },
    { icon: <SiMastercard />, name: "Mastercard" },
    { icon: <SiAmericanexpress />, name: "American Express" },
    { icon: <SiPaypal />, name: "PayPal" }
  ];

  return (
    <footer id="footer" className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold text-emerald-600">FreshMart</span>
            </div>
            <p className="text-gray-600 mb-6">
              Your trusted source for fresh, organic produce and household essentials. Committed to sustainability and
              community wellness.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
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

          {/* Customer Service */}
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

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-emerald-600 mt-1" />
                <span className="text-gray-600">123 Green Street, Eco City, 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-emerald-600" />
                <a href="tel:+12345678900" className="text-gray-600 hover:text-emerald-600">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-emerald-600" />
                <a href="mailto:info@freshmart.com" className="text-gray-600 hover:text-emerald-600">
                  info@freshmart.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods & Links */}
        <div className="border-t border-gray-200 pt-8 pb-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-4">
              {paymentMethods.map((method, index) => (
                <span key={index} className="text-gray-400 text-2xl" title={method.name}>
                  {method.icon}
                </span>
              ))}
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

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} FreshMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

