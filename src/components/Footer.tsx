import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <span>Created with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by</span>
            <a 
              href="https://github.com/IMDevArt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              IMDevArt
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ModernShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};