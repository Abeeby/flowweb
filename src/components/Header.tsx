import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Flow Food Truck" width={150} height={50} />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium text-gray-700 hover:text-flow-green transition-colors">
            Accueil
          </Link>
          <Link href="/prestations" className="font-medium text-gray-700 hover:text-flow-green transition-colors">
            Prestations
          </Link>
          <Link href="/menu" className="font-medium text-gray-700 hover:text-flow-green transition-colors">
            Carte du FoodTruck
          </Link>
          <Link href="/plat-semaine" className="font-medium text-gray-700 hover:text-flow-green transition-colors">
            Plat de la semaine
          </Link>
          <Link href="/actualites" className="font-medium text-gray-700 hover:text-flow-green transition-colors">
            Actualités
          </Link>
        </nav>
        
        <button className="bg-flow-green text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">
          Contact
        </button>
        
        {/* Menu mobile - à développer avec un état pour afficher/masquer */}
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 