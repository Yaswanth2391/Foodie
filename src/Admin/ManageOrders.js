import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ManageOrders.css";

const ORDER_STATUSES = {
  PENDING: "Pending",
  PREPARING: "Preparing",
  ON_THE_WAY: "On the Way",
  DELIVERED: "Delivered",
};

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:4000/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await axios.put(`http://localhost:4000/orders/${orderId}`, {
        status: newStatus,
      });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
      setError("Failed to update order status. Please try again.");
    }
  };

  if (loading) {
    return <div className="loading">Loading orders...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container">
      <h1>Manage Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <h2 className="order-header">Order ID: {order.id}</h2>
          <p className="order-status">Status: {order.status}</p>
          <div className="status-buttons">
            {Object.values(ORDER_STATUSES).map((status) => (
              <button
                key={status}
                className={`status-${status
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                onClick={() => updateOrderStatus(order.id, status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageOrders;
