import "./navbar.css";
import "./navbar.css";
<<<<<<< HEAD
import {Link } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> b3d37e96b7b315f867f58ea685237a00dfd15622
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
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
              <button className="navButton">Đăng nhập</button>
              </Link>
              <Link to="/register">
              <button className="navButton">Đăng kí</button>
              </Link>
            </div>  
        )}
      </div>
    </div>
  );
};

export default Navbar;