import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Navbar = () => {
  const cart = useStore((state) => state.cart);
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">ModernShop</h1>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/electronics"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Electronics
              </Link>
              <Link
                to="/fashion"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Fashion
              </Link>
              <Link
                to="/home-living"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home & Living
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-700 hover:text-gray-900">
              <Search className="h-6 w-6" />
            </button>
            <Link
              to="/cart"
              className="ml-4 p-2 rounded-md text-gray-700 hover:text-gray-900 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <button className="ml-4 sm:hidden p-2 rounded-md text-gray-700 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};