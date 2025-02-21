import React from 'react';
import { ProductCard } from '../components/ProductCard';

const electronicsProducts = [
  {
    id: 'e1',
    name: 'Apple AirPods Pro (2nd Generation)',
    price: 249.99,
    description: 'Active Noise Cancellation, Transparency Mode, Personalized Spatial Audio',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
  },
  {
    id: 'e2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1299.99,
    description: '512GB, Titanium Gray - Unlocked (US Version)',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
  },
  {
    id: 'e3',
    name: 'Sony WH-1000XM5',
    price: 399.99,
    description: 'Wireless Noise Cancelling Headphones with Auto Noise Canceling Optimizer',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
  },
  {
    id: 'e4',
    name: 'MacBook Pro 16-inch',
    price: 2499.99,
    description: 'Apple M3 Pro chip, 32GB RAM, 1TB SSD',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
  },
  {
    id: 'e5',
    name: 'iPad Pro 12.9-inch',
    price: 1099.99,
    description: 'M2 chip, 256GB, Wi-Fi + Cellular',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
  },
  {
    id: 'e6',
    name: 'LG OLED C3 65-inch TV',
    price: 1799.99,
    description: '4K Smart OLED TV with AI ThinQ',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
  },
];

export const Electronics = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Electronics</h1>
        <p className="mt-2 text-lg text-gray-600">Discover the latest in technology and gadgets</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {electronicsProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};