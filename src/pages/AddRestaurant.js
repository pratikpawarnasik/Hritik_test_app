// src/pages/AddRestaurant.js
import React from "react";
import { addRestaurant } from "../api";
import RestaurantForm from "../components/RestaurantForm";

const AddRestaurant = ({ history }) => {
  const initialValues = {
    name: "",
    description: "",
    location: "",
    // Add more initial fields as needed
  };

  const onSubmit = async (values) => {
    await addRestaurant(values);
    history.push("/");
  };

  return (
    <div>
      <h1>Add Restaurant</h1>
      <RestaurantForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default AddRestaurant;
