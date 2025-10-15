import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Landing from './landing.jsx';
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
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/travooz" element={<Travooz />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/souvenirs" element={<Souvenirs />} />
          <Route path="/card" element={<Card />} />
          <Route path="/events" element={<Events />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/hms" element={<HmsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
