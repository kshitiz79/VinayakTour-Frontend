import React from "react";
import "./DestinationDetails.css";

function DestinationDetails({ destination }) {
  return (
    <div className="destination-detail-page">
      <div className="destination-detail-header">
        <h1>{destination.name}</h1>
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-detail-image"
        />
      </div>
 
      <div className="destination-detail-info">
        <h2>Overview</h2>
        <p>{destination.about}</p>

        <h3>Highlights</h3>
        <ul>
          {destination.highlights?.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>

        <h3>Things to Do</h3>
        <p>{destination.thingsToDo}</p>

        <h3>Best Time to Visit</h3>
        <p>{destination.bestTimeToVisit}</p>

        <button className="details-enquiry">Enquiry Now</button>
      </div>
    </div>
  );
}

export default DestinationDetails;
