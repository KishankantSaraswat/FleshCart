import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const { addToCart, cart } = useCart();

  // Function to check if item is in cart and get quantity
  const getItemQuantity = (productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  // Get filtered products
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory)
  );

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Get unique categories from products
  const categories = [...new Set(products.map(product => product.category))].sort();

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Shop Our Products</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative md:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-full px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-full px-4 py-2 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {currentProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => {
            const quantity = getItemQuantity(product.id);
            
            return (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative">
                    <img 
                      src={product.image || "/placeholder.svg"} 
                      alt={product.name} 
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h2>
                    <p className="text-emerald-600 font-bold">₹{(product.price/100).toFixed(2)}</p>
                  </div>
                </Link>
                <div className="p-4 pt-0">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="w-full bg-emerald-600 text-white py-2 px-4 rounded-full hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    {quantity > 0 ? `Add More (${quantity} in cart)` : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 border border-gray-300 text-sm font-medium
                  ${index === 0 ? 'rounded-l-md' : ''}
                  ${index === totalPages - 1 ? 'rounded-r-md' : ''}
                  ${currentPage === index + 1 
                    ? 'bg-emerald-600 text-white border-emerald-600' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Shop;
