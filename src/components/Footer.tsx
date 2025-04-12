import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-flow-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Flow Food Truck</h3>
            <p className="text-gray-300 mb-4">
              Traiteur, foodtruck et préparation de plats à emporter.
            </p>
            <div className="mb-4">
              <p className="text-gray-300 font-bold mb-1">Adresse</p>
              <p className="text-gray-300">
                Chemin des Delices 25<br />
                1234 Lausanne<br />
                Suisse
              </p>
            </div>
            <div>
              <p className="text-gray-300 font-bold mb-1">Contact</p>
              <p className="text-gray-300">
                info@flow-foodtruck.ch<br />
                +41 76 123 45 67
              </p>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/prestations" className="text-gray-300 hover:text-white transition-colors">
                  Prestations
                </Link>
              </li>
              <li>
                <Link href="/plat-semaine" className="text-gray-300 hover:text-white transition-colors">
                  Plat de la semaine
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-white transition-colors">
                  Carte du Foodtruck
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-gray-300 hover:text-white transition-colors">
                  Actualités
                </Link>
              </li>
            </ul>
          </div>

          {/* Labels et récompenses */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Labels et certifications</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Label fait maison</li>
              <li className="text-gray-300">Produits locaux et bio</li>
              <li className="text-gray-300">Emballages écologiques</li>
              <li className="text-gray-300">Médailles cuisine</li>
            </ul>
          </div>

          {/* Application mobile */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Application Flow Food</h3>
            <p className="text-gray-300 mb-4">
              Téléchargez notre application pour passer vos commandes en ligne.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="block w-32">
                <Image 
                  src="/app-store-badge.png" 
                  alt="Disponible sur App Store" 
                  width={120} 
                  height={40} 
                />
              </Link>
              <Link href="#" className="block w-32">
                <Image 
                  src="/google-play-badge.png" 
                  alt="Disponible sur Google Play" 
                  width={120} 
                  height={40} 
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Flow Food Truck – Site développé par Flow Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 