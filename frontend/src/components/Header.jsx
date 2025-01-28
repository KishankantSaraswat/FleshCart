import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
<<<<<<< HEAD
=======
import { CiShoppingCart, CiSearch, CiUser } from "react-icons/ci"
import { HiMenuAlt3 } from "react-icons/hi"
>>>>>>> 8519ed70ba3ccf12fee61313212a530bab640ddd

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
<<<<<<< HEAD
    <header id="header" className="bg-white shadow-sm fixed w-full top-0 z-50 mb-11">
      <nav className="container mx-auto px-4">
        {/* Top announcement bar */}
        <div className="bg-emerald-600 text-white py-2 text-center text-sm">
          <p>Free delivery on orders over ₹50 🚚</p>
=======
    <header id="header" className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4">
        {/* Top announcement bar */}
        <div className="bg-emerald-600 text-white py-2 text-center text-sm">
          <p></p>
>>>>>>> 8519ed70ba3ccf12fee61313212a530bab640ddd
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">FreshMart</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Home
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Shop
            </Link>
            <Link to="/categories" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Categories
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Contact
            </Link>
<<<<<<< HEAD
=======

            <Link to="/login" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Login
            </Link>
>>>>>>> 8519ed70ba3ccf12fee61313212a530bab640ddd
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
<<<<<<< HEAD
            <button className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              <i className="fas fa-search text-xl"></i>
            </button>

            {/* Account */}
            <button className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              <i className="fas fa-user text-xl"></i>
            </button>

            {/* Cart */}
            <button className="relative text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              <i className="fas fa-shopping-cart text-xl"></i>
=======
            <button 
              className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
              aria-label="Search"
            >
              <CiSearch className="text-2xl" />
            </button>

            {/* Account */}
            <button 
              className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
              aria-label="Account"
            >
              <CiUser className="text-2xl" />
            </button>

            {/* Cart */}
            <button 
              className="relative text-gray-600 hover:text-emerald-600 transition-colors duration-300"
              aria-label="Shopping Cart"
            >
              <CiShoppingCart className="text-2xl" />
>>>>>>> 8519ed70ba3ccf12fee61313212a530bab640ddd
              <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 hover:text-emerald-600 transition-colors duration-300"
              onClick={toggleMobileMenu}
<<<<<<< HEAD
            >
              <i className="fas fa-bars text-xl"></i>
=======
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <HiMenuAlt3 className="text-2xl" />
>>>>>>> 8519ed70ba3ccf12fee61313212a530bab640ddd
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
<<<<<<< HEAD
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
=======
        <div 
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          aria-label="Mobile navigation"
        >
>>>>>>> 8519ed70ba3ccf12fee61313212a530bab640ddd
          <div className="py-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Home
            </Link>
            <Link to="/shop" className="block text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Shop
            </Link>
            <Link
              to="/categories"
              className="block text-gray-600 hover:text-emerald-600 transition-colors duration-300"
            >
              Categories
            </Link>
            <Link to="/about" className="block text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="block text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

