import React, { useState } from 'react';
import Navbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';
import HomePage from './Components/pages/HomePage';
import ActivityPage from './Components/pages/ActivityPage';
import AboutPage from './Components/pages/AboutPage';
import ContactPage from './Components/pages/ContactPage';
import BookingSection from './Components/sections/BookingSection';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <HomePage />;
      case 'Activities': return <ActivityPage />;
      case 'About': return <AboutPage />;
      case 'Contact': return <ContactPage />;
      case 'Booking': return <BookingSection />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;