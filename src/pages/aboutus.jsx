import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";
import team from "../assets/onepic.png";

const AboutUs = () => {

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* About Travooz Section */}
      <section className="pt-28 py-16 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 tracking-tight">
              ABOUT TRAVOOZ
            </h1>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Image */}
            <div className="lg:w-1/3 w-full">
              <img 
                src={team} 
                alt="Travooz Company" 
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Right Content */}
            <div className="lg:w-2/3 w-full">
              <p className="text-gray-700 leading-relaxed mb-4">
                  The company was established in 2024 with the vision of revolutionizing Rwanda's tourism ecosystem. The project 
                  aims to transform the visitor experience by seamlessly integrating inspiration, planning, convenience, and memory-making 
                  solutions. Our comprehensive approach bridges the gap between travelers and the rich cultural, natural, and business 
                  opportunities Rwanda has to offer.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Travooz consists of eight interconnected products: Online Travel Agency (OTA), streaming Channel, Concierge & Support services, 
                  Hotel Management System (HMS), authentic Souvenirs marketplace, innovative Events platform, Convenience Card payment solution, 
                  and comprehensive Pocket Guide. These solutions work in harmony to deliver a 360-degree travel experience that showcases 
                  the beauty and opportunities of Rwanda while supporting local communities and businesses.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our mission extends beyond traditional tourism services. We ensure that every visitor transitions from a passive guest to 
                  an active explorer, while guaranteeing that the economic benefits of tourism flow deeply into local communities. Through 
                  innovative technology and authentic experiences, we're building the future of sustainable tourism in Rwanda, creating 
                  lasting memories while preserving and celebrating our rich cultural heritage.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Travooz represents more than just a collection of services - it's a comprehensive ecosystem designed to inspire, connect, 
                  and transform. Every product within our portfolio contributes to a seamless journey that begins with inspiration and 
                  culminates in unforgettable experiences that visitors will treasure for a lifetime.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 px-10 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">OUR PURPOSE</h2>
          <p className="text-lg leading-relaxed font-light">
            We create the Joy of True Discovery to inspire unforgettable journeys. We ignite the moments that connect travelers 
            with Rwanda's heart, create lasting bonds and memories that are unforgettable. We help make every visit meaningful, 
            transforming passive tourists into passionate ambassadors, one experience, one connection at a time!
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">OUR VALUES ————</h2>
          <p className="text-center text-gray-600 mb-16 max-w-4xl mx-auto">
            TRAVOOZ has four core values as derived from our commitment to sustainable tourism and community development. Our values are what we stand for: Passion for travelers and destinations, 
            Courage to innovate and transform, Care for people and our planet, and the Celebration of authentic experiences. These values have shaped our vision since establishment and are the foundation for 
            our future success.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg flex items-start gap-4">
              <div className="flex-shrink-0">
                <img 
                  src={team} 
                  alt="Innovation" 
                  className="w-20 h-20 rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-green-600">INNOVATION</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  We believe in delivering what our travelers need and desire by understanding the authentic experiences they seek. 
                  We create the highest quality tourism products and services to best 
                  serve our visitors, ensuring they connect deeply with Rwanda's beauty and culture.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg flex items-start gap-4">
              <div className="flex-shrink-0">
                <img 
                  src={team} 
                  alt="Community Care" 
                  className="w-20 h-20 rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-green-600">CARE</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  Care is at the heart of our company. Sustainability flows 
                  through everything we do. We proudly serve our diverse 
                  community of travelers while caring for all our people, local communities 
                  and our beautiful Planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Travooz Section */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Travooz?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-green-600 text-2xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
              <p className="text-gray-600">Round-the-clock assistance for all your travel needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-green-600 text-2xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Trusted Service</h4>
              <p className="text-gray-600">Reliable and secure travel planning with local expertise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-green-600 text-2xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Best Experience</h4>
              <p className="text-gray-600">Curated experiences showcasing the best of Rwanda</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;
