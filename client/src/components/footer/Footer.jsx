import "./footer.css";

const Footer = () => {
  console.log("Footer")
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Quốc Gia</li>
          <li className="fListItem">Vùng Miền</li>
          <li className="fListItem">Thành Phố</li>
          <li className="fListItem">Quận</li>
          <li className="fListItem">Sân bay</li>
          <li className="fListItem">Khách sạn</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Những nơi độc đáo để ở </li>
          <li className="fListItem">Đánh giá</li>
          <li className="fListItem">Unpacked: Các bài báo về du lịch </li>
          <li className="fListItem">Cộng đồng du lịch</li>
          <li className="fListItem">Seasonal and holiday deals </li>
        </ul>
        {/* <ul className="fList">
          <li className="fListItem">Car rental </li>
          <li className="fListItem">Flight Finder</li>
          <li className="fListItem">Restaurant reservations </li>
          <li className="fListItem">Travel Agents </li>
        </ul> */}
        <ul className="fList">
          <li className="fListItem">Dịch vụ khách hàng</li>
          <li className="fListItem">Đối tác</li>
          <li className="fListItem">Nghề nghiệp</li>
          <li className="fListItem">Sự bền vững</li>
          <li className="fListItem">Trung tâm báo chí</li>
          <li className="fListItem">Trung tâm tài nguyên an toàn</li>
          <li className="fListItem">Quan hệ đầu tư</li>
          <li className="fListItem">Điều khoản và điều kiện</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Group02 HCMUS</div>
    </div>
  );
};

export default Footer;
