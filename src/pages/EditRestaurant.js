// src/pages/EditRestaurant.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRestaurants, updateRestaurant } from "../api";
import RestaurantForm from "../components/RestaurantForm";

const EditRestaurant = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const navigate = useNavigate(); // Use navigate to redirect
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    location: "",
    // Add more initial fields as needed
  });

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const restaurant = await getRestaurants(); // get all restaurants
      const restaurantToEdit = restaurant.find((r) => r.id === parseInt(id));
      setInitialValues(restaurantToEdit);
    } catch (error) {
      console.error("Error fetching restaurant:", error);
    }
  };

  const onSubmit = async (values) => {
    try {
      await updateRestaurant(id, values);
      navigate("/"); // Redirect to home page after update
    } catch (error) {
      console.error("Error updating restaurant:", error);
    }
  };

  return (
    <div>
      <h1>Edit Restaurant</h1>
      <RestaurantForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default EditRestaurant;
