import { ProductCard } from '../components/ProductCard';

const homeLivingProducts = [
  {
    id: 'h1',
    name: 'Instant Pot Duo Plus 9-in-1',
    price: 129.99,
    description: 'Electric Pressure Cooker, Slow Cooker, Rice Cooker',
    image: 'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?auto=format&fit=crop&w=800&q=80',
    category: 'Home & Living',
  },
  {
    id: 'h2',
    name: 'Dyson V15 Detect',
    price: 749.99,
    description: 'Cordless Vacuum Cleaner with Laser Detection',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80',
    category: 'Home & Living',
  },
  {
    id: 'h3',
    name: 'KitchenAid Stand Mixer',
    price: 379.99,
    description: 'Professional 5 Plus Series 5 Quart Bowl-Lift Stand Mixer',
    image: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?auto=format&fit=crop&w=800&q=80',
    category: 'Home & Living',
  },
  {
    id: 'h4',
    name: 'Ninja Foodi 9-in-1 Deluxe XL',
    price: 219.99,
    description: 'Pressure Cooker and Air Fryer',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80',
    category: 'Home & Living',
  },
  {
    id: 'h5',
    name: 'iRobot Roomba j7+',
    price: 799.99,
    description: 'Self-Emptying Robot Vacuum',
    image: 'https://images.unsplash.com/photo-1563163447-12c1ed6cbd46?auto=format&fit=crop&w=800&q=80',
    category: 'Home & Living',
  },
  {
    id: 'h6',
    name: 'Nespresso Vertuo Next',
    price: 159.99,
    description: 'Coffee and Espresso Machine by De\'Longhi',
    image: 'https://images.unsplash.com/photo-1517914309068-f000ec71aa33?auto=format&fit=crop&w=800&q=80',
    category: 'Home & Living',
  },
];

export const HomeLiving = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Home & Living</h1>
        <p className="mt-2 text-lg text-gray-600">Transform your living space with our premium selection</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {homeLivingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};