import React, { useState } from "react";
import { destination_list } from "../images/assets"; 
import "./Explore.css";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDestinations = destination_list.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="explore-section">
      <div className="explore-background">
        {destination_list.map((destination, index) => (
          <div
            key={destination._id}
            className={`background-image image-${index + 1}`}
            style={{ backgroundImage: `url(${destination.image})` }}
          />
        ))}
      </div>

      <div className="explore-content">
        <input
          type="text"
          placeholder="Search for destinations..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />

        <div className="destination-list">
          {filteredDestinations.map((destination) => (
            <div className="destination-item" key={destination._id}>
              <img src={destination.image} alt={destination.name} className="destination-image" />
              <h2>{destination.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
