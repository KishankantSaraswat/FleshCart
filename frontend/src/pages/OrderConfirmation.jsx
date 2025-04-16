import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const OrderConfirmation = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <h1 className="text-3xl font-bold mb-6">No Order Found</h1>
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
      <div className="max-w-2xl mx-auto text-center">
        <FaCheckCircle className="text-6xl text-emerald-600 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. We'll send you an email confirmation shortly.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="space-y-3">
            <p><span className="font-medium">Order ID:</span> {orderDetails.orderId}</p>
            <p><span className="font-medium">Name:</span> {orderDetails.firstName} {orderDetails.lastName}</p>
            <p><span className="font-medium">Email:</span> {orderDetails.email}</p>
            <p><span className="font-medium">Shipping Address:</span> {orderDetails.address}</p>
            <p><span className="font-medium">Total Amount:</span> ₹{orderDetails.total.toFixed(2)}</p>
          </div>
        </div>

        <div className="space-x-4">
          <Link 
            to="/shop" 
            className="bg-emerald-600 text-white py-2 px-6 rounded hover:bg-emerald-700 transition-colors duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;