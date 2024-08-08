// src/components/RestaurantItem.js
import React from "react";
import { Link } from "react-router-dom";

const RestaurantItem = ({ restaurant, onDelete }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      <p>{restaurant.location}</p>
      <button onClick={() => onDelete(restaurant.id)}>Delete</button>
      <Link to={`/edit/${restaurant.id}`}>Edit</Link>
    </div>
  );
};

export default RestaurantItem;
