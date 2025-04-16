import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { CiShoppingCart, CiSearch, CiUser } from "react-icons/ci"
import { HiMenuAlt3 } from "react-icons/hi"
import { useCart } from "../context/CartContext"
import { useSearch } from "../context/SearchContext"
import SearchModal from "./SearchModal"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getCartCount } = useCart()
  const { toggleSearch } = useSearch()
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header id="header" className="bg-white shadow-sm fixed w-full top-0 z-40">
        <nav className="container mx-auto px-4">
          {/* Top announcement bar */}
          <div className="bg-emerald-600 text-white py-2 text-center text-sm">
            <p>Free Delivery on Orders Above ₹999</p>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-emerald-600">FreshMart</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-gray-600 hover:text-emerald-600 transition-colors duration-300 ${location.pathname === '/' ? 'text-emerald-600' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className={`text-gray-600 hover:text-emerald-600 transition-colors duration-300 ${location.pathname === '/shop' ? 'text-emerald-600' : ''}`}
              >
                Shop
              </Link>
              <Link 
                to="/categories" 
                className={`text-gray-600 hover:text-emerald-600 transition-colors duration-300 ${location.pathname === '/categories' ? 'text-emerald-600' : ''}`}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className={`text-gray-600 hover:text-emerald-600 transition-colors duration-300 ${location.pathname === '/about' ? 'text-emerald-600' : ''}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`text-gray-600 hover:text-emerald-600 transition-colors duration-300 ${location.pathname === '/contact' ? 'text-emerald-600' : ''}`}
              >
                Contact
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              {/* Search */}
              <button 
                onClick={toggleSearch}
                className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                aria-label="Search"
              >
                <CiSearch className="text-2xl" />
              </button>

              {/* Account */}
              <Link 
                to="/login"
                className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                aria-label="Account"
              >
                <CiUser className="text-2xl" />
              </Link>

              {/* Cart */}
              <Link 
                to="/cart"
                className="relative text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                aria-label="Shopping Cart"
              >
                <CiShoppingCart className="text-2xl" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <HiMenuAlt3 className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
          >
            <div className="py-4 space-y-4">
              <Link to="/" className="block text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                Home
              </Link>
              <Link to="/shop" className="block text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                Shop
              </Link>
              <Link to="/categories" className="block text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                Categories
              </Link>
              <Link to="/about" className="block text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                About
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                Contact
              </Link>
              <Link to="/login" className="block text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                Login
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <SearchModal />
    </>
  )
}

export default Header

