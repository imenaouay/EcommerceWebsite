import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';

// Real product data from the provided references
const featuredProducts = [
  // Electronics
  {
    id: '1',
    name: 'Apple AirPods Pro (2nd Generation)',
    price: 249.99,
    description: 'Active Noise Cancellation, Transparency Mode, Personalized Spatial Audio',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
    featured: true,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1299.99,
    description: '512GB, Titanium Gray - Unlocked (US Version)',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
    featured: true,
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    price: 399.99,
    description: 'Wireless Noise Cancelling Headphones with Auto Noise Canceling Optimizer',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
    featured: true,
  },
  // Fashion
  {
    id: '4',
    name: 'Calvin Klein Women\'s Modern Cotton Bralette',
    price: 28.99,
    description: 'Comfortable cotton blend with iconic logo band',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
    featured: true,
  },
  {
    id: '5',
    name: 'Tommy Hilfiger Men\'s Classic Fit Shirt',
    price: 49.99,
    description: 'Button down oxford shirt in premium cotton',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
    featured: true,
  },
  // Home & Living
  {
    id: '6',
    name: 'Instant Pot Duo Plus 9-in-1',
    price: 129.99,
    description: 'Electric Pressure Cooker, Slow Cooker, Rice Cooker',
    image: 'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?auto=format&fit=crop&w=800&q=80',
    category: 'Home & Living',
    featured: true,
  },
  {
    id: '7',
    name: 'Dyson V15 Detect',
    price: 749.99,
    description: 'Cordless Vacuum Cleaner with Laser Detection',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80',
    category: 'Home & Living',
    featured: true,
  },
];

const categories = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
    description: 'Latest gadgets and technology',
    path: '/electronics'
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80',
    description: 'Trendy clothing and accessories',
    path: '/fashion'
  },
  {
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80',
    description: 'Everything for your home',
    path: '/home-living'
  },
];

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              New Season Arrivals
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover the latest in Electronics, Fashion, and Home
            </p>
            <Link
              to="/electronics"
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              to={category.path}
              key={category.name}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <h3 className="text-white text-3xl font-bold mb-2">{category.name}</h3>
                <p className="text-white text-lg opacity-90">{category.description}</p>
                <span className="mt-4 bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};