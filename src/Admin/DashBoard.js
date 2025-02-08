import React, { useContext, useMemo, useState, useEffect } from "react";
import Welcome from "./Welcome";
import AddDishes from "./AddDishes";
import AdminLogin from "./AdminLogin";
import { loginStatus } from "../App";
import ViewDishes from "./ViewDishes";
import ManageOrders from "./ManageOrders";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [view, setView] = useState("");
  const [login, setLogin] = useContext(loginStatus);
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState("");

  const fetchDishes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/dishes");
      setDishes(response.data);
    } catch (error) {
      console.error("Error fetching dishes:", error);
      setError("Failed to fetch dishes. Please try again.");
    }
  };

  useEffect(() => {
    if (login) {
      fetchDishes();
    }
  }, [login]);

  const handleAddDish = (newDish) => {
    setDishes((prevDishes) => [...prevDishes, newDish]);
  };

  const DashboardView = useMemo(() => {
    if (view === "") {
      return <Welcome />;
    } else if (view === "addDishes") {
      return <AddDishes onAddDish={handleAddDish} />;
    } else if (view === "viewDishes") {
      return <ViewDishes dishes={dishes} />;
    } else if (view === "manageOrders") {
      return <ManageOrders />;
    }
  }, [view, dishes]);

  if (login) {
    return (
      <div className="container-fluid">
        <div className="row">
          <aside className="col-lg-3">
            <h2 onClick={() => setView("")}>Admin Dashboard</h2>
            <button onClick={() => setView("addDishes")}>Add Dish</button>
            <button onClick={() => setView("viewDishes")}>View Dishes</button>
            <button onClick={() => setView("manageOrders")}>
              Manage Orders
            </button>
          </aside>

          <div className="col-lg-9 d-flex justify-content-center align-item-center">
            {DashboardView}
          </div>
        </div>
      </div>
    );
  } else {
    return <AdminLogin />;
  }
};

export default Dashboard;
