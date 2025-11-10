import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-lg mb-2">Travooz</h2>
            <p className="text-sm">Your gateway to Rwanda's beauty, culture, and opportunities.</p>
          </div>
          <div className="text-center md:text-left">
            <span className="font-semibold mb-3 block">Quick Links</span>
            <div className="space-y-1">
              <Link to="/" className="text-xs hover:underline block">Home</Link>
              <Link to="/about" className="text-xs hover:underline block">About</Link>
              <Link to="/products" className="text-xs hover:underline block">Products</Link>
              <Link to="/gallery" className="text-xs hover:underline block">Gallery</Link>
              <Link to="/contact" className="text-xs hover:underline block">Contact</Link>
              <Link to="/terms" className="text-xs hover:underline block">Terms & Conditions</Link>
            </div>
          </div>
          <div className="text-center md:text-left">
            <span className="font-semibold mb-3 block">Contact</span>
            <div className="space-y-1">
              <span className="text-xs flex items-center justify-center md:justify-start gap-2"><i className="fa fa-phone"></i> +250 784 214 455</span>
              <span className="text-xs flex items-center justify-center md:justify-start gap-2"><i className="fa fa-envelope"></i> info@travooz.com</span>
            </div>
          </div>
          <div className="text-center md:text-left">
            <span className="font-semibold mb-3 block">Follow Us</span>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" aria-label="Facebook" className="hover:text-blue-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-300"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-300"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="WhatsApp" className="hover:text-green-300"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 mt-6 pt-4 text-center text-xs opacity-80">
          &copy; {new Date().getFullYear()} Travooz. All rights reserved.
        </div>
      </footer>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </>
  );
};

export default Footer;