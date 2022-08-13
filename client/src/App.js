import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Payment from "./pages/payment/Payment";
import PaymentSuccess from "./pages/paymentSuccess/PaymentSuccess";
import PaymentCancle from "./pages/payment/PaymentCancle";
import PaymentUI from "./pages/payment/PaymentUI"
import UserProfile from "./pages/userProfile/UserProfile";
import HeaderUser from "./components/headerUser/HeaderUser";
import Receipt from "./pages/receipt/Receipt";
import Preresentative from "./pages/presentative/Presentative";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/userProfile" element={<UserProfile/>}/>
        <Route path="/headerUser" element={<HeaderUser/>}/>
        <Route path="/viewListFavorist" element={<Register/>}/>
        < Route path="/payment" element={<Payment/>}/>
        < Route path="/success" element={<PaymentSuccess/>}/>
        < Route path="/cancel" element={<PaymentCancle/>}/>
        < Route path="/paymentUI" element={<PaymentUI/>}/>
        < Route path="/receipt" element={<Receipt/>}/>
        < Route path="/listorders" element={<Receipt/>}/>
        < Route path="/representative" element={<Preresentative/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
