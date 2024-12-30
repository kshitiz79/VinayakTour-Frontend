import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Destination from "./Destination/Destination";
import DestinationDetails from "./DestinationDetails/DestinationDetails"; 
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";
import BlogPage from "./BlogPage/BlogPage";  
import TransferPage from "./Transfer/Transfer";
import Holiday from "./Holiday/Holiday";
import Activity from "./Activity/Activity";
import About from "./About/About";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy"; 
import Footer from "./Footer/Footer";
import { destination_list } from './images/assets';
import Transfer from "./Transfer/Transfer";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState("holiday");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedDestination(null); 
    setShowPrivacyPolicy(false); 
  };

  const handleViewDetails = (destinationId) => {
    const destination = destination_list.find(d => d._id === destinationId);
    setSelectedDestination(destination);
    setCurrentPage("destination-details");
  };

  return (
    <div>
      <Navbar setShowLogin={setShowLogin} handleNavigation={handleNavigation} />
      
      {/* Conditionally render pages */}
      {currentPage === "destination" && <Destination handleViewDetails={handleViewDetails} />}
      {currentPage === "destination-details" && selectedDestination && <DestinationDetails destination={selectedDestination} />}
      {currentPage === "holiday" && <Holiday />} 
      {currentPage === "activity" && <Activity />}
      {currentPage === "about" && <About />}
      {currentPage === "transfer" && <Transfer />}
      {currentPage === "privacy-policy" && <PrivacyPolicy />}
      {showLogin && <LoginPage setShowLogin={setShowLogin} />}
      
      <Footer handleNavigation={handleNavigation} />
    </div>
  );
}

export default App;