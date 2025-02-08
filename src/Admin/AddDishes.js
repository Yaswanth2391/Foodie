import axios from "axios";
import React, { useState } from "react";
import "./AddDishes.css";

const AddDishes = ({ onAddDish }) => {
  const [dishName, setDishName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const postDish = async (e) => {
    e.preventDefault();

    // Validation
    if (!dishName || !image || !price || !description || !category) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/dishes", {
        dishName,
        image,
        price,
        description,
        category,
      });
      alert("New Dish Added");

      onAddDish(response.data);

      setDishName("");
      setImage("");
      setPrice("");
      setDescription("");
      setCategory("");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to add the dish. Please try again.");
    }
  };

  return (
    <div className="container p-5">
      <h2>Details</h2>
      <form onSubmit={postDish}>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          name="dishName"
          placeholder="Dish Name"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
        />

        <input
          type="text"
          name="image"
          placeholder="Item image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          type="number"
          name="price"
          placeholder="Food Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input type="submit" value="Add Dish" />
      </form>
    </div>
  );
};

export default AddDishes;
