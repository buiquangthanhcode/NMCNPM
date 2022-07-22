//import icon from library
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  console.log("Header")
  const [destination, setDestination] = useState("");
 
  const [openDate, setOpenDate] = useState(false); // ngày bắt đầu tính từ thời điểm hiện tại 
  const [dates, setDates] = useState([ // thời gian lưu trú của khách
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate(); // foward website 
  const { user } = useContext(AuthContext); // take user who accessing website



  // operation is d(giảm) và i (increas) tăng giảm phòng
  function handleOption(name, operation) {
    setOptions((prev) => {
      console.log((prev));
      // lay het tat ca cac du lieu 
      return {  
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  }

  const { dispatch } = useContext(SearchContext); // search hotel 

  function handleSearch() {
    
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  }

  return (
    <div className="header">
      <div
      // if list show header to user (icon: bed, car, plane)  --> here we can update subpage 
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />  
            <span>Nơi ở</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Chuyến bay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Thuê xe </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Địa điểm thuê xoa</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi sân bay</span>
          </div>
        </div>
        {/* () below only have True or False */}
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Đặt phòng khách sạn đơn giản chỉ với 3 bước
            </h1>
            <p className="headerDesc">
              Tận hưởng kì nghỉ dưỡng của bạn – Đăng kí tài khoản cùng Hotel Booking để được nhận ưu đãi 
            </p>
            {!user && <button className="headerBtn">Đăng kí / Đăng nhập</button>}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Địa điểm khách sạn"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)} ///real time input (e.target.value ) --> gia tri minh nhap vao o tim kiem 
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)} // set value is TRUE OR FALSE
                  className="headerSearchText"
  
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} đến ${format( // hn thi ra ngay tuong ung theo thoi diem hien tai khi truy cap websiteie
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}
                </span>
                {openDate && (
                  <DateRange // Mở ra 1 calender cho người dùng chọn ngày bắt đầu và ngày kết thúc 
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])} 
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} người lớn · ${options.children} trẻ em · ${options.room} phòng`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Tìm kiếm  
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;