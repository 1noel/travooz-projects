import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Terms Content */}
      <section className="pt-28 py-16 px-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 tracking-tight">
              TERMS & CONDITIONS
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
          
          {/* Last Updated */}
          <div className="mb-8 text-gray-600">
            <p><strong>Last Updated:</strong> November 3, 2025</p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Travooz. These Terms and Conditions ("Terms", "Terms and Conditions") govern your 
              relationship with the Travooz website and services operated by Travooz ("us", "we", or "our").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using our service, you accept and agree to be bound by the terms and provision 
              of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          {/* Use License */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on Travooz's website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
              transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This license shall automatically terminate if you violate any of these restrictions and may 
              be terminated by Travooz at any time.
            </p>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Our Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Travooz provides a comprehensive ecosystem of tourism and travel-related services including 
              but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Online Travel Agency (OTA) booking platform</li>
              <li>Tourism content streaming through Travooz Channel</li>
              <li>Concierge services</li>
              <li>Hotel Management System (HMS)</li>
              <li>Authentic Rwandan souvenirs</li>
              <li>Event management and coordination</li>
              <li>Payment card services</li>
              <li>Digital travel guides</li>
            </ul>
          </div>

          {/* Booking and Reservations */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Booking and Reservations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you make a booking through our platform:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>All bookings are subject to availability and confirmation</li>
              <li>Prices are subject to change until booking is confirmed</li>
              <li>Payment must be made in full at the time of booking unless otherwise specified</li>
              <li>Cancellation policies vary by service provider and will be clearly stated at booking</li>
              <li>You are responsible for ensuring all travel documents are valid and up to date</li>
            </ul>
          </div>

          {/* Privacy Policy */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
              your information when you use our service. By using our service, you agree to the collection 
              and use of information in accordance with our Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We collect information you provide directly to us, information we get from your use of our 
              services, and information from third parties. We use this information to provide, maintain, 
              and improve our services.
            </p>
          </div>

          {/* Payment Terms */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment for services must be made through our secure payment systems. We accept various 
              payment methods including credit cards, debit cards, and mobile money where available.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All prices are listed in the currency specified at the time of booking. You are responsible 
              for any currency conversion fees or fluctuations that may apply.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In no event shall Travooz or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising 
              out of the use or inability to use the materials on Travooz's website, even if Travooz or 
              a Travooz authorized representative has been notified orally or in writing of the possibility 
              of such damage.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days notice prior to any new 
              terms taking effect.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What constitutes a material change will be determined at our sole discretion. By continuing 
              to access or use our service after those revisions become effective, you agree to be bound 
              by the revised terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> info@travooz.com</p>
                <p><strong>Phone:</strong> +250 784 214 455</p>
                <p><strong>Address:</strong> KK 500 St, Kigali, Rwanda</p>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of 
              Rwanda and you irrevocably submit to the exclusive jurisdiction of the courts in that 
              state or location.
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <Link 
              to="/"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Terms;