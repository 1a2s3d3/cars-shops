import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ onSignOut }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onSignOut();
    navigate("/");
  };

  // ✅ ADD THIS FUNCTION (new)
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark carpacs-navbar fixed-top">
      <div className="container">
        <li className="navbar-brand list-unstyled">
          <Link to="/home" className="text-decoration-none" onClick={closeNavbar}>
            CarPacs
          </Link>
        </li>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2 text-center">
            <li className="nav-item">
              <Link className="nav-link danger" to="/home" onClick={closeNavbar}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/menu" onClick={closeNavbar}>
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/service" onClick={closeNavbar}>
                Service
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/order" onClick={closeNavbar}>
                Order
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-danger ms-lg-3 mt-3 mt-lg-0"
                onClick={() => {
                  closeNavbar(); // ✅ also close menu
                  handleLogout();
                }}
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;