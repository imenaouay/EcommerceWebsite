import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const OrderSuccess = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Thank You for Your Order!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your order has been successfully placed. We'll send you an email with your order details.
        </p>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};