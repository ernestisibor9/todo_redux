import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const productsObj = useSelector((store) => store);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary navbar-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Ernest<span>Store</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/view" class="nav-link" href="#">
                  View
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/task" class="nav-link" href="#">
                  Task
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/show" class="nav-link" href="#">
                  <FaCartArrowDown style={{ fontSize: "1.5rem" }} />
                  <span
                    class="badge bg-danger"
                    style={{ fontSize: "1rem", padding: "10px" }}
                  >
                    {productsObj.products.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
