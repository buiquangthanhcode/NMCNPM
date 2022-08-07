import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import { DateRange } from 'react-date-range';
import { useState, useContext } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext.js';
import { AuthContext } from '../../context/AuthContext';

const Header = ({ type }) => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    people: 1,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } });
    navigate('/hotels', { state: { destination, dates, options } });
  };

  return (
    <div className="headerBanner">
      <div className="headerSearch">
        <div className="headerSearchItems">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input
            className="headerInput"
            type="text"
            placeholder="Tìm kiếm..."
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="headerSearchItems">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchText"
          >{`${format(dates[0].startDate, 'dd/MM/yyyy')} đến  ${format(
            dates[0].endDate,
            'dd/MM/yyyy'
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              className="date"
              minDate={new Date()}
            />
          )}
        </div>

        <div className="headerSearchItems">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText"
          >{`${options.people} người ${options.room} phòng`}</span>
          {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Số lượng</span>
                <div className="optionCounter">
                  <button
                    disabled={options.people <= 1}
                    onClick={() => handleOption('people', 'd')}
                    className="optionCounterButton"
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.people}</span>
                  <button
                    onClick={() => handleOption('people', 'i')}
                    className="optionCounterButton"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Phòng</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    onClick={() => handleOption('room', 'd')}
                    className="optionCounterButton"
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    onClick={() => handleOption('room', 'i')}
                    className="optionCounterButton"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItems">
          <button className="headerSearchBtn" onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="iconSearch" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
