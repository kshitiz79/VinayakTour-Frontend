import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the destination name from the URL
import { destination_list } from '../images/assets'; // Adjust the import path as needed

function Details() {
  const { name } = useParams();  // Get the destination name from the URL parameter
  const destination = destination_list.find((dest) => dest.name === name);  // Find the destination from the list

  if (!destination) {
    return <h2>Destination not found!</h2>;  // If no destination found, show a message
  }

  return (
    <div className="details-page">
      <h1>{destination.name}</h1>
      <img src={destination.image} alt={destination.name} />
      <h2>{destination.title}</h2>
      <p>{destination.description}</p>
    </div>
  );
}

export default Details;



