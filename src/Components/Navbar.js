import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main_container">
      <div className="left_content">
        <div className="center">
          <Link className="nav-link active" to="/welcome">
            Home
          </Link>
          <br />
          <Link className="nav-link" to="/viewcourse">
            View Courses
          </Link>
          <br />
          <Link className="nav-link" to="/addcourse">
            Add Course
          </Link>
          <br />
          <Link className="nav-link" to="/contactus">
            Contact Us
          </Link>
          <br />
          <Link className="nav-link" to="/aboutus">
            About Us
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
