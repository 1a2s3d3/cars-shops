import React, { useState } from "react";
import FormCard from "../components/FormCard";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <FormCard title="Login" buttonText="Login" onSubmit={handleSubmit}>
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
          name="username"
          placeholder="Enter your User Name"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
    </FormCard>
  );
}

export default Login;