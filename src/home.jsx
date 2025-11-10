import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";
import gorilla2 from "./assets/images/gorilla2.png";
import bg2 from "./assets/bgtoon.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Team members data
  const teamMembers = [
    {
      name: "Noel Imanishimwe",
      title: "Founder & Lead Developer",
      quote: "The strength of the team is each individual member. The strength of each member is the team",
      image: "https://ui-avatars.com/api/?name=Noel+Imanishimwe&background=16a34a&color=fff&size=200&bold=true"
    },
    {
      name: "Claire Mbarushimana",
      title: "Marketing Director",
      quote: "Individual commitment to a group effort--that is what makes a team work, a company work.",
      image: "https://ui-avatars.com/api/?name=Claire+Mbarushimana&background=16a34a&color=fff&size=200&bold=true"
    },
    {
      name: "Nathanael Niyogushimwa",
      title: "Operations Director",
      quote: "There is a difference between being the best in the team and being best for the team.",
      image: "https://ui-avatars.com/api/?name=Nathanael+Niyogushimwa&background=16a34a&color=fff&size=200&bold=true"
    },
    {
      name: "Jean Claude",
      title: "Chief Executive Officer",
      quote: "Innovation distinguishes between a leader and a follower. We lead through creative solutions.",
      image: "https://ui-avatars.com/api/?name=Jean+Claude&background=16a34a&color=fff&size=200&bold=true"
    },
    {
      name: "Shema Katende",
      title: "Technology Director",
      quote: "Excellence is not a destination; it is a continuous journey that never ends.",
      image: "https://ui-avatars.com/api/?name=Shema+Katende&background=16a34a&color=fff&size=200&bold=true"
    },
    {
      name: "Kelvin Shayo",
      title: "Finance Director",
      quote: "Technology is best when it brings people together and creates meaningful experiences.",
      image: "https://ui-avatars.com/api/?name=Kelvin+Shayo&background=16a34a&color=fff&size=200&bold=true"
    }
  ];

  const totalSlides = isMobile ? teamMembers.length : 2;

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <main className="bg-white">
      <Navigation />
      
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .dot.active {
          background-color: #16a34a !important;
        }
      `}</style>

      <section className="pt-28 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-5 bg-lime-600 px-10 py-16">
        <div className="md:w-[45%] w-full text-left flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in-up text-white capitalize">
            Welcome to Travooz
          </h1>
          <p className="text-white leading-relaxed mb-8 animate-fade-in-up delay-100">
            Your ultimate gateway to discovering the beauty, culture, and opportunities of Rwanda. Experience a seamless journey where inspiration meets exploration, and every moment becomes a lasting memory.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/products" 
              className="px-6 py-3 bg-white text-lime-600 rounded-full shadow transition-all font-medium cursor-pointer animate-fade-in-up delay-200 hover:bg-gray-100"
            >
              Explore Products
            </Link>
            <Link 
              to="/about" 
              className="px-6 py-3 border-white border text-white rounded-full shadow transition-all font-medium cursor-pointer animate-fade-in-up delay-200 hover:bg-white hover:text-lime-600"
            >
              About Us
            </Link>
          </div>
        </div>
        <div className="md:w-[55%] w-full flex justify-center items-center">
          <img src={bg2} alt="Welcome to Travooz" />
        </div>
      </section>

      {/* About Section */}
      <section className="text-center py-20 px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* About Label */}
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">ABOUT</span>
            <div className="w-16 h-0.5 bg-green-600 mx-auto mt-2"></div>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl font-bold mb-12 text-gray-800 tracking-tight">
            WHO WE ARE
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-600 max-w-3xl mx-auto font-light">
            In 2024, Travooz was established in Rwanda with the vision of revolutionizing the visitor experience. Through the years, our product portfolio has grown in tandem with Rwanda's tourism sector and currently includes comprehensive travel solutions, immersive media content, authentic souvenirs, smart payment systems, hospitality management, curated events, and digital guides - all proudly designed to showcase the beauty and opportunities of Rwanda.
          </p>
          
          {/* Read More Button */}
          <Link 
            to="/about"
            className="inline-block border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* Team Testimonials Section */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">TEAM</span>
            <div className="w-16 h-0.5 bg-green-600 mx-auto mt-2 mb-6"></div>
            <h2 className="text-xl md:text-4xl font-bold mb-6 text-gray-800 tracking-tight">
              WHAT OUR SENIOR MANAGEMENT SAYS
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="testimonial-carousel flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              
              {isMobile ? (
                // Mobile: Individual team members
                teamMembers.map((member, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-sm mx-auto text-center">
                      <div className="mb-6">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-200"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">{member.name}</h3>
                      <p className="text-gray-600 font-medium mb-4">{member.title}</p>
                      <p className="text-gray-700 leading-relaxed text-sm px-4">
                        {member.quote}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                // Desktop: Groups of 3 team members
                <>
                  {/* Group 1 */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                      {teamMembers.slice(0, 3).map((member, index) => (
                        <div key={index} className="text-center">
                          <div className="mb-6">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-green-200"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-green-600 mb-2">{member.name}</h3>
                          <p className="text-gray-600 font-medium mb-4">{member.title}</p>
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {member.quote}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Group 2 */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                      {teamMembers.slice(3, 6).map((member, index) => (
                        <div key={index} className="text-center">
                          <div className="mb-6">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-green-200"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-green-600 mb-2">{member.name}</h3>
                          <p className="text-gray-600 font-medium mb-4">{member.title}</p>
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {member.quote}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

            </div>

            {/* Dots Indicator - Only show on mobile */}
            {isMobile && (
              <div className="flex justify-center mt-8 space-x-1">
                {teamMembers.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}
            
            {/* Dots for desktop - show fewer dots */}
            {!isMobile && (
              <div className="flex justify-center mt-8 space-x-2">
                <div 
                  className={`w-3 h-3 rounded-full ${currentSlide === 0 ? 'bg-green-600' : 'bg-gray-300'}`}
                />
                <div 
                  className={`w-3 h-3 rounded-full ${currentSlide === 1 ? 'bg-green-600' : 'bg-gray-300'}`}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">PRODUCTS</span>
            <div className="w-16 h-0.5 bg-green-600 mx-auto mt-2 mb-6"></div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800 tracking-tight">
              OUR ECOSYSTEM
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our integrated suite of eight innovative products designed to transform your Rwanda experience.
            </p>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Product 1 - OTA */}
            <Link to="/travooz" className="group text-center">
              <div className="border border-gray-200 rounded-lg p-8 mb-4 group-hover:border-green-300 group-hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Travooz OTA</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Complete travel booking platform for seamless Rwanda experiences</p>
              </div>
            </Link>

            {/* Product 2 - Channel */}
            <Link to="/channel" className="group text-center">
              <div className="border border-gray-200 rounded-lg p-8 mb-4 group-hover:border-green-300 group-hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Travooz Channel</h3>
                <p className="text-sm text-gray-600 leading-relaxed">24/7 tourism content streaming showcasing Rwanda's beauty</p>
              </div>
            </Link>

            {/* Product 3 - Souvenirs */}
            <Link to="/souvenirs" className="group text-center">
              <div className="border border-gray-200 rounded-lg p-8 mb-4 group-hover:border-green-300 group-hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Souvenirs</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Authentic Rwandan crafts and cultural keepsakes</p>
              </div>
            </Link>

            {/* Product 4 - HMS */}
            <Link to="/hms" className="group text-center">
              <div className="border border-gray-200 rounded-lg p-8 mb-4 group-hover:border-green-300 group-hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg mb-3 text-gray-800">HMS</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Hotel management system for hospitality excellence</p>
              </div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link 
              to="/products"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Products
            </Link>
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

export default Home;