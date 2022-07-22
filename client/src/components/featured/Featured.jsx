import useFetch from "../../hook/useFetch";
import "./featured.css";

const Featured = () => {
  console.log("Featured")
  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByCity?cities=madrid,london") // take data from URL
  return (
    <div className="featured">
          { loading ? ("Loading please wait...") : (
            <>
          <div className="featuredItem">
            <img
              src="https://www.vietnambooking.com/wp-content/uploads/2019/10/ve-may-bay-ha-noi-di-hoi-an-15102019-2.png"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Đà Nẵng</h1>  
              <h2>{data[0]}  chỗ nghỉ</h2>
            </div>
          </div>
          
          <div className="featuredItem">
            <img
              src="https://bigvn.blog/dp/wp-content/uploads/2018/07/ha-noi-co-bao-nhieu-quan8-1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hà Nội</h1>
              <h2>{data[1]} chỗ nghỉ </h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://maisonoffice.vn/wp-content/uploads/2018/03/33-toa-nha-cao-nhat-viet-nam-1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sài Gòn</h1>
              <h2>{data[2]}  chỗ nghỉ</h2>
            </div>
          </div></>
          )
      }
      
    </div>
  );
};

export default Featured;
