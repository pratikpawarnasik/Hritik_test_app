import React from "react";
import { Link } from "react-router-dom";
import RestaurantList from "../components/RestaurantList";

const RestoHome = () => {
  return (
    <div>
      <h1>Restaurant Admin Panel</h1>
      <Link to="/add">Add Restaurant</Link>
      <RestaurantList />
    </div>
  );
};

export default RestoHome;
