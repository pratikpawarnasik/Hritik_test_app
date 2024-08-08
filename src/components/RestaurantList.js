// src/components/RestaurantList.js
import React, { useEffect, useState } from "react";
import { getRestaurants, deleteRestaurant } from "../api";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getRestaurants();
      setRestaurants(data); // Set the data directly
    } catch (error) {
      setError(error);
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRestaurant(id);
      fetchData(); // Refresh the list
    } catch (error) {
      setError(error);
      console.error("Error deleting restaurant:", error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>Here is Restaurant List!</h3>
      {restaurants.length > 0 ? (
        restaurants.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p>No restaurants available.</p>
      )}
    </div>
  );
};

export default RestaurantList;
