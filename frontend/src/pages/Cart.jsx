import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <p className="mb-8">Your cart is empty.</p>
        <Link 
          to="/shop" 
          className="bg-emerald-600 text-white py-2 px-6 rounded hover:bg-emerald-700 transition-colors duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="hidden md:grid md:grid-cols-5 bg-gray-100 p-4 text-gray-600 font-medium">
          <div className="col-span-2">Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        
        {cart.map((item) => (
          <div key={item.id} className="border-b last:border-b-0 p-4 md:grid md:grid-cols-5 md:items-center">
            <div className="md:col-span-2 flex items-center mb-4 md:mb-0">
              <img 
                src={item.image || "/placeholder.svg"} 
                alt={item.name} 
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm mt-1 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
            
            <div className="mb-2 md:mb-0">
              <span className="md:hidden font-medium mr-2">Price:</span>
              ₹{item.price.toFixed(2)}
            </div>
            
            <div className="mb-2 md:mb-0 flex items-center">
              <span className="md:hidden font-medium mr-2">Quantity:</span>
              <div className="flex items-center border rounded">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 border-r"
                >
                  -
                </button>
                <span className="px-3 py-1">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 border-l"
                >
                  +
                </button>
              </div>
            </div>
            
            <div>
              <span className="md:hidden font-medium mr-2">Total:</span>
              ₹{(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
        
        <div className="p-4 bg-gray-50 flex justify-between items-center">
          <div>
            <Link 
              to="/shop" 
              className="text-emerald-600 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold mb-2">
              Total: ₹{getCartTotal().toFixed(2)}
            </div>
            <Link 
              to="/checkout"
              className="bg-emerald-600 text-white py-2 px-6 rounded hover:bg-emerald-700 transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;