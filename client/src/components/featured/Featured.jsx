import useFetch from '../../hooks/useFetch.js';
import './featured.css';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=berlin,madrid,london'
  );

  const location = [
    {
      id: 1,
      city: 'Đà Nẵng',
      img: 'https://www.vietnambooking.com/wp-content/uploads/2019/10/ve-may-bay-ha-noi-di-hoi-an-15102019-2.png',
      amount: data[0],
    },
    {
      id: 2,
      city: 'Hà Nội',
      img: 'https://bigvn.blog/dp/wp-content/uploads/2018/07/ha-noi-co-bao-nhieu-quan8-1.jpg',
      amount: data[1],
    },
    {
      id: 3,
      city: 'Hồ Chí Minh',
      img: 'https://maisonoffice.vn/wp-content/uploads/2018/03/33-toa-nha-cao-nhat-viet-nam-1.jpg',
      amount: data[2],
    },
  ];

  return (
    <div className="featured">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <Swiper
            modules={[Navigation, Thumbs]}
            speed={1300}
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={3}
            navigation={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={console.log('silde change')}
          >
            {location.map((item) => {
              return (
                <SwiperSlide className="featuredItem" key={item.id}>
                  <img src={item.img} alt="" className="featuredImg" />
                  <div className="featuredInfo">
                    <h1>{item.city}</h1>
                    <h2>{item.amount} khách sạn</h2>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Featured;
