// src/components/RestaurantList.js
import React, { useEffect, useState } from "react";
import { getRestaurants, deleteRestaurant } from "../api";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantsPerPage] = useState(5);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getRestaurants();
    setRestaurants(response);
  };

  const handleDelete = async (id) => {
    await deleteRestaurant(id);
    fetchData(); // Refresh the list
  };

  // Pagination logic
  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurants.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

  const totalPages = Math.ceil(restaurants.length / restaurantsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="restaurant-list-container">
      <h3>Here is Restaurant List!</h3>
      {currentRestaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-item">
          <div className="restaurant-info">
            <span>
              <strong>Name:</strong> {restaurant.name}
            </span>
            <span>
              <strong>Location:</strong> {restaurant.location}
            </span>
            <span>
              <strong>Cuisine:</strong> {restaurant.cuisine}
            </span>
          </div>
          <div className="restaurant-actions">
            <button
              onClick={() => alert("Edit functionality not implemented yet!")}
            >
              Edit
            </button>
            <button
              className="delete"
              onClick={() => handleDelete(restaurant.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
