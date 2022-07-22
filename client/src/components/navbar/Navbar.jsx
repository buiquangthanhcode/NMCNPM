import "./navbar.css";
import React from "react";
const Navbar = () => {
<<<<<<< HEAD
  const { user } = useContext(AuthContext); // check user who accessing website
  console.log("Navbar")
  console.log(user)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Hotel Booking</span>
        </Link >
        {user ? user.username : ( // can link to here user profile
            <div className="navItems">
              <Link to="/login">
              <button className="navButton">Login</button>
              </Link>
              <Link to="/register">
              <button className="navButton">Register</button>
              </Link>
            </div>
        )}
=======

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Book4Fun.com</span>
        <div className="navItems">
          <button className="navButton">Đăng nhập/ Đăng ký</button>
        </div>
>>>>>>> f5636cfb2b18b27b61f8f22d8dbc07b4bd3b96c6
      </div>
    </div>
  );
};

export default Navbar;