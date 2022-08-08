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
import PaymentSucess from "./pages/payment/PaymentSucess";
import PaymentCancle from "./pages/payment/PaymenCancle";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/userProfile" element={<Register/>}/>
        <Route path="/viewHistory" element={<Register/>}/>
        <Route path="/viewListFavorist" element={<Register/>}/>
       < Route path="/payment" element={<Payment/>}/>
       < Route path="/payment/success" element={<PaymentSucess/>}/>
       < Route path="/payment/cancel" element={<PaymentCancle/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
