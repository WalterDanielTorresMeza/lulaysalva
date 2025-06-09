import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import EventLocation from './components/EventLocation';
import PhotoCarousel from './components/PhotoCarousel';
import FinalMessage from './components/FinalMessage';
function App() {
  return (
    <div>
      <Header />
      <Countdown targetDate="2025-07-26T16:00:00" />
      <PhotoCarousel />
      <EventLocation />
      <FinalMessage />
      {/* Aquí van los demás componentes */}
    </div>
  );
}

export default App;
