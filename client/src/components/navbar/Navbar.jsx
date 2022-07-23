import "./navbar.css";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDay, faPerson, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
const Navbar = () => {
  const { user } = useContext(AuthContext); // check user who accessing webNavbar.jsxsite
  console.log("Navbar")
  console.log(user)
  const [show, setShow] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [date, setDate] = useState([
    {

      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
  const [people, setPeople] = useState(1);
  const [room, setRoom] = useState(1);
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
      <div className="headerBanner">
        <div className="headerSearch">
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input className="headerInput" type="text" placeholder="Tìm kiếm..." />
          </div>
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
            <span onClick={() => setShow(!show)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} đến  ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            {show && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}

            />
            }
          </div>

          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOption(!openOption)} className="headerSearchText">{`${people} người ${room} phòng`}</span>
            {openOption && <div className="options">
              <div className="optionItem">
                <span className="optionText">Số lượng</span>
                <div className="optionCounter">
                  <button disabled={people <= 1} onClick={() => setPeople(prev => prev - 1)} className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">{people}</span>
                  <button onClick={() => setPeople(prev => prev + 1)} className="optionCounterButton">+</button>
                </div>
              </div>
                <div className="optionItem">
                  <span className="optionText">Phòng</span>
                  <div className="optionCounter">
                    <button disabled={room <= 1} onClick={() => setRoom(prev => prev - 1)} className="optionCounterButton">-</button>
                    <span className="optionCounterNumber">{room}</span>
                    <button onClick={() => setRoom(prev => prev + 1)} className="optionCounterButton">+</button>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className="headerSearchItems">
            <button className="headerSearchBtn"><FontAwesomeIcon icon={faMagnifyingGlass} className="iconSearch" /></button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;