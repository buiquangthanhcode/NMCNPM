import "./mailList.css"

const MailList = () => {
  console.log("MailList")
  return (
    <div className="mail">
      <h1 className="mailTitle">Tiết kiệm thời gian, tiết kiệm tiền bạc!</h1>
      <span className="mailDesc">Đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Đăng kí</button>
      </div>
    </div>
  )
}

export default MailList