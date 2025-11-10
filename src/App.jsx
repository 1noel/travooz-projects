import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.jsx';
import AboutUs from './pages/aboutus.jsx';
import Products from './pages/products.jsx';
import Gallery from './pages/gallery.jsx';
import Contact from './pages/contact.jsx';
import Terms from './pages/terms.jsx';
import Travooz from './pages/travooz.jsx';
import Channel from './pages/Channel.jsx';
import Souvenirs from './pages/souvenirs.jsx';
import Card from './pages/card.jsx';
import Events from './pages/events.jsx';
import Guide from './pages/guide.jsx';
import HmsPage from './pages/hms.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/travooz" element={<Travooz />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/souvenirs" element={<Souvenirs />} />
          <Route path="/card" element={<Card />} />
          <Route path="/events" element={<Events />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/hms" element={<HmsPage />} />
          <Route path="/concierge" element={<div className="pt-20 p-10 text-center"><h1 className="text-3xl">Concierge Service Coming Soon</h1></div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
