import React from 'react'; 
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, ArrowRight } from 'lucide-react';

const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  
  // Calculate subtotal, shipping, tax, and total
  const subtotal = React.useMemo(() => 
    cart.reduce((acc, product) => acc + product.price * (product.quantity || 1), 0),
    [cart]
  );
  const shipping = 99;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shipping + tax;

  // Empty Cart Component
  const EmptyCart = () => (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <motion.div 
        className="flex-grow container mx-auto mt-20 mb-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <ShoppingCart className="w-24 h-24 mx-auto text-emerald-600 mb-6" />
        </motion.div>
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Discover our beautiful Laddu Gopal dresses</p>
        <Link to="/shop" className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition duration-300 inline-flex items-center">
          Continue Shopping
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>
      <Footer />
    </div>
  );

  // Cart Item Component
  const CartItem = ({ product }) => (
    <motion.div 
      key={product.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-lg p-4 mb-3 border border-emerald-200 hover:shadow-sm transition-shadow duration-200"
    >
      <div className="flex flex-row items-center space-x-4">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-cover rounded-md shadow-sm"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base text-gray-800 truncate">{product.name}</h3>
          <p className="text-gray-600 text-xs mt-0.5">Size: {product.size || 'Standard'}</p>
          <div className="flex items-center mt-2 space-x-3">
            <button
              onClick={() => updateQuantity(product.id, product.selectedSize, Math.max(1, product.quantity - 1))}
              className="text-emerald-600 border border-emerald-600 rounded-full w-6 h-6 flex items-center justify-center hover:bg-emerald-50 transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-6 text-center text-sm font-medium">{product.quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, product.selectedSize, product.quantity + 1)}
              className="text-emerald-600 border border-emerald-600 rounded-full w-6 h-6 flex items-center justify-center hover:bg-emerald-50 transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
        <div className="text-right flex flex-col items-end">
          <p className="font-bold text-base text-gray-900">₹{(product.price * product.quantity).toFixed(2)}</p>
          <button
            onClick={() => removeFromCart(product.id, product.selectedSize)}
            className="flex items-center space-x-1 text-red-600 hover:text-red-700 text-xs mt-1"
          >
            <X className="w-3 h-3" />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </motion.div>
  );

  // If the cart is empty, show the Empty Cart component
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <section className="py-12 mt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-3xl font-bold text-center mb-8 text-emerald-800">Your Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {cart.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-lg p-6 border border-emerald-200 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold">₹{shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="font-semibold">₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <p>Estimated Delivery: 5-7 business days</p>
                  <p className="text-red-600 font-semibold mt-2">Hurry! Limited stock available!</p>
                </div>

                <Link 
                  to="/checkout"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg mb-3 hover:bg-emerald-700 transition block text-center"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/shop"
                  className="w-full border border-emerald-600 text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition block text-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
