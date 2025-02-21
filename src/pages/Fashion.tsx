import React from 'react';
import { ProductCard } from '../components/ProductCard';

const fashionProducts = [
  {
    id: 'f1',
    name: 'Calvin Klein Women\'s Modern Cotton Bralette',
    price: 28.99,
    description: 'Comfortable cotton blend with iconic logo band',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
  },
  {
    id: 'f2',
    name: 'Tommy Hilfiger Men\'s Classic Fit Shirt',
    price: 49.99,
    description: 'Button down oxford shirt in premium cotton',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
  },
  {
    id: 'f3',
    name: 'Nike Air Max 270',
    price: 150.00,
    description: 'Men\'s Running Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
  },
  {
    id: 'f4',
    name: 'Levi\'s 501 Original Fit Jeans',
    price: 69.99,
    description: 'Classic straight leg jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
  },
  {
    id: 'f5',
    name: 'Ray-Ban Aviator Sunglasses',
    price: 154.00,
    description: 'Classic Gold Frame with Green G-15 Lenses',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
  },
  {
    id: 'f6',
    name: 'Michael Kors Leather Tote',
    price: 298.00,
    description: 'Large Saffiano Leather Tote Bag',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
  },
];

export const Fashion = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Fashion</h1>
        <p className="mt-2 text-lg text-gray-600">Discover the latest trends in fashion</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {fashionProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};