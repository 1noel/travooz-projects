import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Gallery Content */}
      <section className="pt-28 py-20 px-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 tracking-tight">
              GALLERY
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the breathtaking landscapes, vibrant culture, and incredible experiences that Rwanda has to offer.
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Row 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://i.pinimg.com/1200x/f2/53/46/f25346b96ea602daeac510a8355e9f72.jpg" 
                alt="Volcanoes National Park Rwanda" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">Volcanoes National Park</h3>
                <p className="text-sm opacity-90">Home to mountain gorillas and breathtaking volcanic landscapes</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://i.pinimg.com/1200x/ec/b6/80/ecb680d9377f0c0dbdb0ac27f9d85b01.jpg" 
                alt="Lake Kivu Rwanda" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">Lake Kivu</h3>
                <p className="text-sm opacity-90">Serene waters and stunning views perfect for relaxation</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://i.pinimg.com/1200x/58/50/5f/58505fb6a6c33884145e9c9d59850508.jpg" 
                alt="Kigali City Rwanda" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">Kigali City</h3>
                <p className="text-sm opacity-90">Modern African capital with vibrant culture</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://i.pinimg.com/1200x/09/9f/b5/099fb557c5cbe50f5d1306a3af439280.jpg" 
                alt="Rwandan Cultural Dance" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">Cultural Heritage</h3>
                <p className="text-sm opacity-90">Rich traditions and customs of Rwandan people</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://i.pinimg.com/1200x/55/4c/41/554c41725c562e0d2d2c429cb08eaf08.jpg" 
                alt="Nyungwe Forest Rwanda" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">Nyungwe Forest</h3>
                <p className="text-sm opacity-90">Canopy walks and diverse wildlife experiences</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Akagera National Park Rwanda" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">Adventure Tourism</h3>
                <p className="text-sm opacity-90">Thrilling outdoor experiences and activities</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://i.pinimg.com/736x/f2/ec/ad/f2ecad4ea1288744bf03f404c53ea299.jpg" 
                alt="Rwandan Tea Plantations" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">Tea Plantations</h3>
                <p className="text-sm opacity-90">Rolling hills covered in lush green tea gardens</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://i.pinimg.com/736x/f3/8a/b5/f38ab513c269a55b19300726b0f61e30.jpg" 
                alt="Rwandan Traditional Markets" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">Local Markets</h3>
                <p className="text-sm opacity-90">Vibrant markets showcasing local crafts and produce</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://i.pinimg.com/1200x/f7/d8/79/f7d879d6a1486f026ba9ba9c30a3a125.jpg" 
                alt="Mountain Gorillas Rwanda" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">Mountain Gorillas</h3>
                <p className="text-sm opacity-90">Endangered mountain gorilla trekking experiences</p>
              </div>
            </div>

          </div>

       
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gallery;