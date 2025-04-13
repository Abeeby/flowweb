import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section pt-32 pb-16 text-white relative">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Flow Food Truck, le goût de l&apos;authenticité.
            </h1>
            <p className="text-xl mb-10">
              Plongez dans l&apos;authenticité culinaire avec notre foodtruck, notre service traiteur et nos délicieux repas à emporter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/plat-semaine" className="btn-primary">
                Plat de la semaine
              </Link>
              <Link href="/menu" className="bg-white text-flow-dark py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
                Menu et emplacement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-flow-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Qui suis-je ?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-flow-dark">
              Flo Rapin, <br />
              cuisinier de profession
            </h3>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-12 mt-12">
            <div className="text-center">
              <span className="text-4xl font-bold text-flow-green block mb-2">15</span>
              <span className="text-gray-700">Années d&apos;expérience</span>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-flow-green block mb-2">8</span>
              <span className="text-gray-700">Variétés de burgers artisanaux</span>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-flow-green block mb-2">1000+</span>
              <span className="text-gray-700">Clients satisfaits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Mes services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-flow-dark mb-4">
              Un ensemble de prestations variées
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Service traiteur
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-flow-dark mb-2">Service traiteur</h4>
                <p className="text-gray-600 mb-4">Anniversaire, repas de famille, apéro</p>
                <p className="text-gray-700 mb-6">
                  Vous avez un anniversaire, une communion, un repas de famille, un mariage, 
                  un apéro entre amis ou collègues, une manifestation quelconque...
                </p>
                <Link href="/prestations" className="text-flow-green font-semibold hover:underline">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  FoodTruck
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-flow-dark mb-2">FoodTruck</h4>
                <p className="text-gray-600 mb-4">Burgers, panini, frites maison</p>
                <p className="text-gray-700 mb-6">
                  Nous sillonnons la région avec notre FoodTruck pour vous proposer divers 
                  produits labellisés et du terroir sous forme de burgers, paninis, frites...
                </p>
                <Link href="/prestations" className="text-flow-green font-semibold hover:underline">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Repas à emporter
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-flow-dark mb-2">Repas à emporter</h4>
                <p className="text-gray-600 mb-4">Plat de la semaine</p>
                <p className="text-gray-700 mb-6">
                  Découvrez chaque semaine le « plat de la semaine » à emporter directement 
                  chez vous, prêt à être dégusté après quelques minutes au micro-ondes.
                </p>
                <Link href="/prestations" className="text-flow-green font-semibold hover:underline">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plat de la semaine */}
      <section className="py-16 px-4 bg-flow-green text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">PLAT DE LA SEMAINE</h2>
            <h3 className="text-2xl font-semibold">Il n&apos;y a plus qu&apos;à réchauffer</h3>
          </div>
          
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-2">Risotto aux champignons</h4>
            <div className="text-2xl font-bold text-flow-green mb-4">15€</div>
            <p className="text-gray-600 mb-6">
              Semaine 20: Délicieux risotto aux champignons des bois, parsemé de parmesan et agrémenté d&apos;une touche de truffe.
              Dans un contenant écologique et réutilisable.
            </p>
            <Link 
              href="/contact" 
              className="bg-flow-green hover:bg-opacity-90 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors inline-block"
            >
              Réserver par téléphone
            </Link>
          </div>
        </div>
      </section>

      {/* Foodtruck location */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-flow-dark mb-4">
              Venez savourer l&apos;un de nos délicieux burgers dans notre foodtruck.
            </h2>
            <p className="text-xl text-gray-600">
              Consultez l&apos;emplacement de notre Foodtruck sur la carte
            </p>
          </div>
          <div className="text-center">
            <Link 
              href="/menu" 
              className="btn-primary"
            >
              Menu du Foodtruck
            </Link>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Disponible sur iOS et Android</h2>
              <h3 className="text-3xl font-bold text-flow-dark mb-6">
                Passez vos commandes avec Flow Food sur votre smartphone !
              </h3>
              <p className="text-gray-700 mb-8">
                Découvrez notre menu hebdomadaire et l&apos;emplacement de notre food truck sur une 
                carte interactive via notre application. Recevez des notifications pour ne rien manquer!
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-flow-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Consultez le menu et passez commande en ligne
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-flow-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Consultez l&apos;emplacement du Foodtruck
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-flow-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Consultez le plat de la semaine
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-800 text-white px-4 py-2 rounded">App Store</div>
                <div className="bg-gray-800 text-white px-4 py-2 rounded">Google Play</div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-300 h-96 w-full flex items-center justify-center text-gray-500 rounded">
                Application Mockup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Labels section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Labels et récompenses</h2>
            <h3 className="text-3xl font-bold text-flow-dark mb-4">
              Qualité et engagement
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                Label
              </div>
              <p className="text-center text-gray-700">Label fait maison</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                Bio
              </div>
              <p className="text-center text-gray-700">Produits Bio</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                Local
              </div>
              <p className="text-center text-gray-700">Produits locaux</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                Award
              </div>
              <p className="text-center text-gray-700">Médaille cuisine</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
