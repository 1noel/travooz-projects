import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import six from "../assets/images/6.png";
import seven from "../assets/images/7.png";
import eigth from "../assets/images/8.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Travooz Online Travel Agency (OTA)",
      shortName: "Travooz OTA",
      tagline: "Your Journey, Your Way",
      description: "A versatile digital platform where inspiration meets action. We offer everything from half-day urban explorations and corporate retreats to extended safaris, making it easy for both leisure and business travelers to discover, book, and customize their ideal Rwandan adventure.",
      image: one,
      route: "/travooz",
      features: ["Custom Travel Packages", "Corporate Retreats", "Safari Adventures", "Urban Explorations"]
    },
    {
      id: 2,
      name: "Travooz Channel",
      shortName: "Channel",
      tagline: "The 24/7 Tourism Ambassador",
      description: "A dedicated Free Ad-Supported Streaming Television (FAST) channel, broadcasting from hotel rooms, airport lounges, and personal devices. Through cinematic content across seven pillars-from Wildlife & Conservation to Business & Investment, we spark curiosity and build anticipation.",
      image: two,
      route: "/channel",
      features: ["24/7 Streaming", "Cinematic Content", "Cultural Programming", "Business Features"]
    },
    {
      id: 3,
      name: "Travooz Concierge & Support",
      shortName: "Concierge",
      tagline: "White-Glove Service, Digitally Enhanced",
      description: "From the moment a visitor lands, we ensure seamless comfort. Our services include airport pickup, mobile internet connectivity, and 24/7 personalized support, blending digital convenience with real human care.",
      image: three,
      route: "/concierge",
      features: ["Airport Pickup", "24/7 Support", "Mobile Connectivity", "Personal Assistance"]
    },
    {
      id: 4,
      name: "Travooz Hotel Management System (HMS)",
      shortName: "HMS",
      tagline: "Empowering Hospitality",
      description: "A tailor-made digital solution for Rwanda's accommodation providers. This ERP system streamlines operations from bookings to guest registration while enhancing the in-room experience by integrating the Travooz Channel.",
      image: six,
      route: "/hms",
      features: ["Booking Management", "Guest Registration", "In-room Integration", "Operations Streamline"]
    },
    {
      id: 5,
      name: "Travooz Souvenirs",
      shortName: "Souvenirs",
      tagline: "Carry a Piece of Rwanda Home",
      description: "More than a shop, it's a curated cultural journey. We partner with Rwanda's finest artisans, allowing visitors to browse, customize, and have authentic, beautifully packaged keepsakes delivered to their hotel or home abroad.",
      image: four,
      route: "/souvenirs",
      features: ["Artisan Partnerships", "Custom Orders", "Cultural Crafts", "Global Delivery"]
    },
    {
      id: 6,
      name: "Travooz Events",
      shortName: "Events",
      tagline: "Creating Unforgettable Moments",
      description: "We design and host unique events from corporate sports gatherings to fun competitions that add vibrancy to Rwanda's calendar and attract regional and international audiences, extending stays and enriching the visitor experience.",
      image: seven,
      route: "/events",
      features: ["Corporate Events", "Sports Gatherings", "Competitions", "Cultural Celebrations"]
    },
    {
      id: 7,
      name: "Travooz Convenience Card",
      shortName: "Card",
      tagline: "Effortless Transactions",
      description: "Recognizing the challenges of a cashless economy for international visitors, this smart solution facilitates seamless spending, ensuring that exploring local markets and supporting small businesses is always effortless.",
      image: five,
      route: "/card",
      features: ["Cashless Payments", "Local Market Access", "Smart Spending", "Business Support"]
    },
    {
      id: 8,
      name: "Travooz Pocket Guide",
      shortName: "Guide",
      tagline: "Your Passport to Our City",
      description: "The Travooz Pocket Guide is a compact, passport-sized book uniting print charm with digital convenience. Ideal for visitors and business guests, it offers essential information on attractions and local experiences.",
      image: eigth,
      route: "/guide",
      features: ["Compact Design", "Digital Integration", "Local Attractions", "Essential Information"]
    }
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Products Section */}
      <section className="pt-28 py-16 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 tracking-tight">
              OUR PRODUCTS
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of eight interconnected products designed to revolutionize your Rwanda experience.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Products Sections */}
      <section className="py-10 px-10 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Travooz OTA */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="bg-lime-100 p-8 rounded-lg flex items-center justify-center w-64 h-48">
                <img src={one} alt="Travooz OTA" className="w-20 h-20 object-contain" />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                TRAVOOZ OTA <span className="text-green-600">————</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A versatile digital platform where inspiration meets action. We offer everything from half-day urban explorations 
                and corporate retreats to extended safaris, making it easy for both leisure and business travelers to discover, 
                book, and customize their ideal Rwandan adventure. Our comprehensive booking system ensures seamless travel planning.
              </p>
              <Link 
                to="/travooz" 
                className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Channel */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="bg-lime-100 p-8 rounded-lg flex items-center justify-center w-64 h-48">
                <img src={two} alt="Travooz Channel" className="w-20 h-20 object-contain" />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                CHANNEL <span className="text-green-600">————</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A dedicated Free Ad-Supported Streaming Television (FAST) channel, broadcasting from hotel rooms, airport lounges, 
                and personal devices. Through cinematic content across seven pillars - from Wildlife & Conservation to Business & Investment, 
                we spark curiosity and build anticipation, transforming screens into windows to Rwanda's soul.
              </p>
              <Link 
                to="/channel" 
                className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Concierge */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="bg-lime-100 p-8 rounded-lg flex items-center justify-center w-64 h-48">
                <img src={three} alt="Concierge" className="w-20 h-20 object-contain" />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                CONCIERGE <span className="text-green-600">————</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                From the moment a visitor lands, we ensure seamless comfort. Our services include airport pickup, mobile internet 
                connectivity, and 24/7 personalized support, blending digital convenience with real human care. White-glove service 
                that's digitally enhanced for the modern traveler's needs.
              </p>
              <Link 
                to="/concierge" 
                className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* HMS */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="bg-lime-100 p-8 rounded-lg flex items-center justify-center w-64 h-48">
                <img src={six} alt="HMS" className="w-20 h-20 object-contain" />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                HMS <span className="text-green-600">————</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A tailor-made digital solution for Rwanda's accommodation providers. This ERP system streamlines operations from 
                bookings to guest registration while enhancing the in-room experience by integrating the Travooz Channel, 
                positioning partners as tech-savvy leaders in hospitality management.
              </p>
              <Link 
                to="/hms" 
                className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Souvenirs */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="bg-lime-100 p-8 rounded-lg flex items-center justify-center w-64 h-48">
                <img src={four} alt="Souvenirs" className="w-20 h-20 object-contain" />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                SOUVENIRS <span className="text-green-600">————</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                More than a shop, it's a curated cultural journey. We partner with Rwanda's finest artisans, allowing visitors 
                to browse, customize, and have authentic, beautifully packaged keepsakes from handwoven baskets to world-class 
                coffee delivered to their hotel or home abroad. Carry a piece of Rwanda home.
              </p>
              <Link 
                to="/souvenirs" 
                className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Events */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="bg-lime-100 p-8 rounded-lg flex items-center justify-center w-64 h-48">
                <img src={seven} alt="Events" className="w-20 h-20 object-contain" />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                EVENTS <span className="text-green-600">————</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We design and host unique events from corporate sports gatherings to fun competitions that add vibrancy to 
                Rwanda's calendar and attract regional and international audiences, extending stays and enriching the visitor 
                experience. Creating unforgettable moments that bring people together.
              </p>
              <Link 
                to="/events" 
                className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Card */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="bg-lime-100 p-8 rounded-lg flex items-center justify-center w-64 h-48">
                <img src={five} alt="Convenience Card" className="w-20 h-20 object-contain" />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                CARD <span className="text-green-600">————</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Recognizing the challenges of a cashless economy for international visitors, this smart solution facilitates 
                seamless spending, ensuring that exploring local markets and supporting small businesses is always effortless. 
                Effortless transactions that connect you with authentic Rwanda experiences.
              </p>
              <Link 
                to="/card" 
                className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Guide */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="bg-lime-100 p-8 rounded-lg flex items-center justify-center w-64 h-48">
                <img src={eigth} alt="Pocket Guide" className="w-20 h-20 object-contain" />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                GUIDE <span className="text-green-600">————</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Travooz Pocket Guide is a compact, passport-sized book uniting print charm with digital convenience. 
                Ideal for visitors and business guests, it offers essential information on attractions, dining, and local 
                experiences. Your passport to our city - compact, comprehensive, and always reliable.
              </p>
              <Link 
                to="/guide" 
                className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">The Power of Integration</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
            The true genius of The Travooz Project lies in the synergy between its parts. As a viewer is inspired by a documentary on the Travooz Channel, a simple scan of a QR code instantly connects them to the Travooz OTA to book that very experience. A craft seen on screen can be ordered via Travooz Souvenirs and delivered to their hotel.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-xl">
              <div className="text-lime-600 text-3xl mb-4">
                <i className="fas fa-play-circle"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-lime-700">Inspire</h3>
              <p className="text-gray-600">
                Watch captivating content on Travooz Channel that showcases Rwanda's beauty and opportunities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-xl">
              <div className="text-lime-600 text-3xl mb-4">
                <i className="fas fa-mouse-pointer"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-lime-700">Connect</h3>
              <p className="text-gray-600">
                Seamlessly transition from inspiration to booking with integrated QR codes and smart connections.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-xl">
              <div className="text-lime-600 text-3xl mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-lime-700">Experience</h3>
              <p className="text-gray-600">
                Enjoy premium services and authentic experiences that create lasting memories of Rwanda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-10 bg-lime-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Travooz Difference?</h2>
          <p className="text-lg mb-8">
            Join thousands of travelers who have discovered Rwanda through our integrated ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/travooz"
              className="bg-white text-lime-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-lime-600 transition-colors duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default Products;