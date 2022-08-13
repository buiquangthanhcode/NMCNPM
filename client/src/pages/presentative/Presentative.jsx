
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Login from "../login/Login";
import "./presentative.css";
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import useFetch from "../../hook/useFetch";
import { Link } from "react-router-dom";
import './presentative.css'
import axios from "axios";
export default  function Preresentative()
{
  

  const data =  axios.get("http://localhost:8800/api/hotels").then(response => console.log("response", response.data))
  
  var item=data[0]
  console.log("Dai dien khach san4",data)
  const location =useLocation() 
    for(let i =0;i<data.length;i++)
    {
      if(data[i]._id.localeCompare(location.state.data.hotelname))
      {
         item = data[i]
        console.log("thanh 333")
      }
    }
    console.log("Dai dien khach san1",item)
    console.log("Dai dien khach san2",location.state.data)
  return (
    <h1></h1>
  )
    
  //   <div className="searchItem">
  //   <img src={item.photo[0]} alt="" className="siImg" />
  //   <div className="siDesc"> 
  //     <h1 className="siTitle">{item.name}</h1>
  //     <span className="siDistance">{item.distance} m cách trung tâm Thành Phố </span>
  //     <span className="siTaxiOp">Miễn phí taxi sân bay</span>
  //     <span className="siSubtitle">
  //       Khách sạn đầy đủ tiện nghỉ & an ninh 24/7
  //     </span>
  //     <span className="siFeatures">{item.desc}</span>
  //     <span className="siCancelOp">Hủy phòng miễn phí  </span>
  //     <span className="siCancelOpSubtitle">
  //       Bạn có thể hủy sau,hãy chốt giá ưu đãi này ngay hôm nay!
  //     </span>
  //   </div>
  //   <div className="siDetails">
  //     {item.rating && <div className="siRating">
  //       <span>Excellent</span>
  //       <button>{item.rating}</button>
  //     </div>}
  //     <div className="siDetailTexts">
  //       <span className="siPrice">{item.cheapestPrice} VNĐ</span>
  //       <span className="siTaxOp">Đã bao gồm cả giá và thuế</span>
  //       <Link to={`/hotels/${item._id}`}>
  //         <button className="siCheckButton">Chi tiết </button>
  //       </Link>
  //     </div>
  //   </div>
  // </div>
  // );
};


