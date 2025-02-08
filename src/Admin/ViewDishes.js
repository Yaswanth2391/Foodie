import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewDishes.css";

const ViewDishes = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  const fetchDishes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/dishes");
      console.log("Fetched Dishes:", response.data);
      setDishes(response.data);
    } catch (error) {
      console.error("Error fetching dishes:", error);
      setError("Failed to fetch dishes. Please try again later.");
    }
  };

  const deleteDish = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/dishes/${id}`);
      setDishes(dishes.filter((dish) => dish.id !== id));
    } catch (error) {
      console.error("Error deleting dish:", error);
      setError("Failed to delete the dish. Please try again later.");
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <div className="container">
      <h2>Newly Added Dishes</h2>
      <div className="dishes-grid">
        {dishes.map((dish) => (
          <div className="dish-card" key={dish.id}>
            <img src={dish.image} alt={dish.dishName} className="dish-image" />
            <h3>{dish.dishName}</h3>
            <p>{dish.description}</p>
            <p>Price: Rs{dish.price ? Number(dish.price).toFixed(2) : "N/A"}</p>
            <p>Category: {dish.category}</p>
            <button
              onClick={() => deleteDish(dish.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDishes;
