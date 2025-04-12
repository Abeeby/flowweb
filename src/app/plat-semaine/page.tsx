import React from 'react';
import Link from 'next/link';

export default function PlatSemaine() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-flow-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Plat de la semaine
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez notre plat de la semaine, préparé avec soin et des ingrédients de qualité.
            Il n&apos;y a plus qu&apos;à réchauffer !
          </p>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-flow-dark mb-12">Comment ça marche ?</h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Chaque semaine, un nouveau plat est disponible à notre FoodTruck. Vous pouvez commander ce plat 
              puis venir le chercher à notre FoodTruck, avant de le réchauffer et de le déguster chez vous.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Si vous le souhaitez, vous pouvez également réserver directement en nous écrivant un message 
              sur WhatsApp ou par SMS.
            </p>
            <p className="text-xl font-bold text-flow-dark mb-8">
              +41 76 123 45 67
            </p>
          </div>
        </div>
      </section>

      {/* Plat actuel */}
      <section className="py-16 px-4 bg-flow-light">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="md:w-1/2 h-64 md:h-auto bg-gray-200 flex items-center justify-center text-gray-500">
                Risotto aux champignons
              </div>
              <div className="md:w-1/2 p-8">
                <span className="inline-block bg-flow-green text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Semaine 20
                </span>
                <h3 className="text-3xl font-bold text-flow-dark mb-2">Risotto aux champignons</h3>
                <div className="text-2xl font-bold text-flow-green mb-4">15€</div>
                <p className="text-gray-700 mb-6">
                  Délicieux risotto aux champignons des bois, parsemé de parmesan et agrémenté d&apos;une touche de truffe.
                  Servi dans un contenant écologique et réutilisable.
                </p>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    ♻️
                  </div>
                  <span className="text-gray-700">
                    Dans la boîte ReCIRCLE à 10.- ou 0.- à l&apos;échange
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="btn-primary inline-block"
                >
                  Réserver par téléphone
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plats précédents */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-flow-dark mb-12">Plats précédents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                Boeuf bourguignon
              </div>
              <div className="p-6">
                <span className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Semaine 19
                </span>
                <h3 className="text-xl font-bold text-flow-dark mb-2">Boeuf bourguignon</h3>
                <p className="text-gray-600">
                  Boeuf mijoté dans du vin rouge avec carottes et champignons, accompagné de pommes de terre.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                Lasagnes maison
              </div>
              <div className="p-6">
                <span className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Semaine 18
                </span>
                <h3 className="text-xl font-bold text-flow-dark mb-2">Lasagnes maison</h3>
                <p className="text-gray-600">
                  Lasagnes maison à la viande de boeuf et sauce béchamel, avec son parmesan râpé.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                Poulet au curry
              </div>
              <div className="p-6">
                <span className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Semaine 17
                </span>
                <h3 className="text-xl font-bold text-flow-dark mb-2">Poulet au curry</h3>
                <p className="text-gray-600">
                  Émincé de poulet au curry doux, lait de coco et légumes de saison, accompagné de riz basmati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 