import axios from "axios";

const API_URL = "https://fv8d58-3001.csb.app/restaurants";

// Fetch all restaurants
export const getRestaurants = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the data to the caller
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

// Add a new restaurant
export const addRestaurant = async (restaurant) => {
  return await axios.post(API_URL, restaurant);
};

// Update an existing restaurant
export const updateRestaurant = async (id, restaurant) => {
  return await axios.put(`${API_URL}/${id}`, restaurant);
};

// Delete a restaurant
export const deleteRestaurant = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
