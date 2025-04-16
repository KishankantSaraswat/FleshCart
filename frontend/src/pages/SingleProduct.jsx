import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart, FaLeaf, FaAward, FaTruck, FaBolt } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";

const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart, cart, clearCart } = useCart();
  const navigate = useNavigate();

  // Get cart quantity
  const getCartQuantity = (id) => {
    const item = cart.find(item => item.id === parseInt(id));
    return item ? item.quantity : 0;
  };

  useEffect(() => {
    // Simulating API delay
    const timer = setTimeout(() => {
      const foundProduct = getProductById(productId);
      setProduct(foundProduct);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      // Add the product with the selected quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  const handleBuyNow = () => {
    if (product) {
      // Clear the cart first
      clearCart();
      
      // Add the current product with the selected quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      
      // Navigate to checkout
      navigate('/checkout');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Link 
          to="/shop" 
          className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-300"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <Link to="/shop" className="inline-flex items-center text-emerald-600 mb-8 hover:text-emerald-700">
        <FaArrowLeft className="mr-2" /> Back to Shop
      </Link>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
          <img 
            src={product.image || "/placeholder.svg"} 
            alt={product.name} 
            className="max-w-full max-h-[400px] object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder.svg";
            }}
          />
        </div>
        
        <div>
          <span className="inline-block bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full mb-4">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-emerald-600 mb-6">₹{(product.price/100).toFixed(2)}</p>
          
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              Premium quality {product.name.toLowerCase()} sourced directly from trusted farmers and producers. 
              Our products are carefully selected to ensure freshness and authentic taste.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2">
                <FaLeaf className="text-emerald-600" />
                <span className="text-sm text-gray-600">100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTruck className="text-emerald-600" />
                <span className="text-sm text-gray-600">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAward className="text-emerald-600" />
                <span className="text-sm text-gray-600">Premium Quality</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="bg-gray-200 px-3 py-1 rounded-l-md"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="border-t border-b border-gray-300 text-center w-16 py-1"
              />
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="bg-gray-200 px-3 py-1 rounded-r-md"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleAddToCart}
              className="bg-emerald-600 text-white py-3 px-6 rounded-full hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            
            <button 
              onClick={handleBuyNow}
              className="bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FaBolt />
              Buy Now
            </button>
            
            {getCartQuantity(productId) > 0 && (
              <div className="bg-emerald-50 text-emerald-800 py-3 px-6 rounded-full flex items-center justify-center">
                {getCartQuantity(productId)} in cart
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;