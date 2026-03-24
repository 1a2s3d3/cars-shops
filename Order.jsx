import React, { useState } from "react";
import FormCard from "../components/FormCard";

function Order() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    car: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    alert("Order placed successfully!");
  };

  return (
    <FormCard title="Order a Car" buttonText="Place Order" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="car"
          placeholder="Enter Car Name"
          value={formData.car}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          name="quantity"
          placeholder="Enter Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>
    </FormCard>
  );
}

export default Order;