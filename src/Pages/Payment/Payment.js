import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state;
  useEffect(() => {
    const simulatePayment = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Payment Successful!");

        await axios.post("http://localhost:4000/orders", {
          ...formData,
          status: "Order Placed",
        });

        alert("Order placed successfully!");
        navigate("/");
      } catch (error) {
        console.error("Error processing payment:", error);
        alert("Payment failed. Please try again.");
      }
    };

    simulatePayment();
  }, [formData, navigate]);

  return (
    <div className="payment-container">
      <h2>Processing Payment...</h2>
      <p>Please wait while we process your payment.</p>
    </div>
  );
};

export default Payment;
