import "./navbar.css";
import React from "react";
const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Book4Fun.com</span>
        <div className="navItems">
          <button className="navButton">Đăng nhập/ Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;