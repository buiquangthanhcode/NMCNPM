import "./navbar.css";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import React from "react";
const Navbar = () => {
  const { user } = useContext(AuthContext); // check user who accessing webNavbar.jsxsite
  console.log("Navbar")
  console.log(user)
  return (
    <div className="Header">
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">Book4Fun.com</span>
          <div className="navItems">
            <Link to="/login"><button className="navButton">Đăng nhập/ Đăng ký</button></Link>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Navbar;