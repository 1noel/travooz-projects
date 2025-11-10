import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Contact Content */}
      <section className="pt-28 py-20 px-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 tracking-tight">
              CONTACT US
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to start your Rwanda adventure? Contact us today and let us help you create unforgettable memories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We're here to help you plan the perfect Rwanda experience. Whether you have questions about our services, 
                  need assistance with bookings, or want to learn more about what Rwanda has to offer, our team is ready to assist you.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Location</h3>
                  <p className="text-gray-600">KK 500 St, Kigali, Rwanda</p>
                  <p className="text-gray-500 text-sm mt-1">Visit us during business hours for in-person consultations</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Email</h3>
                  <p className="text-gray-600">info@travooz.com</p>
                  <p className="text-gray-500 text-sm mt-1">We respond to emails within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Phone</h3>
                  <p className="text-gray-600">+250 784 214 455</p>
                  <p className="text-gray-500 text-sm mt-1">Call us Monday - Friday, 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Follow Us</h3>
                <p className="text-gray-600 mb-4">Stay connected with us on social media for the latest updates and travel inspiration.</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-3 text-gray-800">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-2xl mb-6 text-gray-800">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Assistance</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea 
                    required
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 resize-none"
                    placeholder="Tell us about your travel interests, questions, or how we can help you..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="newsletter"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                    Subscribe to our newsletter for travel tips and special offers
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;