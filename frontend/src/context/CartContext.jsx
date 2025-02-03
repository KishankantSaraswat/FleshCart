import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a Context for the cart
const CartContext = createContext();

// Custom hook to access the Cart context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // New state for storing the selected product (Buy Now)
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();

  // Add a product to the cart, considering size
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedSize === product.selectedSize
      );

      let updatedCart;
      if (existingProductIndex >= 0) {
        // If product and size already exist, update its quantity
        updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += product.quantity;
      } else {
        // If product is not in cart, add it with selected size and quantity
        updatedCart = [...prevCart, { ...product, quantity: product.quantity }];
      }

      // Update localStorage immediately after modifying the cart
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  // Handle "Buy Now" functionality
  const buyNow = (product) => {
    setSelectedProduct(product); // Store selected product for checkout
    navigate('/checkout');
  };

  // Remove product from the cart by productId and size
  const removeFromCart = (productId, selectedSize) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => !(item.id === productId && item.selectedSize === selectedSize)
      );

      // Update localStorage immediately after removal
      if (updatedCart.length === 0) {
        localStorage.removeItem('cart');
      } else {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }

      return updatedCart;
    });
  };

  // Update product quantity in the cart
  const updateQuantity = (productId, selectedSize, quantity) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => item.id !== productId || item.selectedSize !== selectedSize);
      }

      const updatedCart = prevCart.map((item) =>
        item.id === productId && item.selectedSize === selectedSize
          ? { ...item, quantity }
          : item
      );

      // Update localStorage after modifying the quantity
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  // Clear all products from the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart'); // Clear the cart from localStorage as well
  };

  // Calculate total price of the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
    calculateTotal,
    buyNow,
    selectedProduct,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Make sure CartContext is exported
export { CartContext };
